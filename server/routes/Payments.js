const express = require('express');

const secretKey = 'sk_test_51NO0eJITaueKIebSG63NCL9BrtB8DKE3LretZtwB3ErDzj68x0yVhCVBx0RnKq9ujIposYRpeus0VeOfSBssMrV400ajOwtvCb'
const stripe = require('stripe')(secretKey);
const bodyParser = require('body-parser');
const Booking = require('../models/Bookings');

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const {data, totalAmount, bookingId} = req.body
    if(totalAmount < 90)
    {
      res.send('Amount must be greater than PKR 90')
      return;
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'PKR',
            product_data: {
              name: 'Tradesman Type: ' + data?.occupation
            },
            unit_amount: totalAmount*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/usersProfile',
      cancel_url: `http://localhost:3000/tradesman/book-appointment/${data?._id}`,
    });
    const booking = await Booking.findOne({ _id: bookingId.bookingId });
    if (booking) {
      console.log(bookingId)
      booking.sessionId = session.id
      await booking.save();
      res.json({ id: session.id });
    }
  });

  router.post('/webhook', async (req, res) => {
    const payload = req.body;
    const sig = req.headers['stripe-signature'];
  
    let event;
  
    try {
      // Verify the webhook signature
      event = stripe.webhooks.constructEvent(payload, sig, 'whsec_18688cf5bc59c86e0b815de8b526ce401d2d0a408888d5b9e5870c34424fb2d7');
    } catch (err) {
      console.error('Webhook signature verification failed.', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        const sessionID = session.id;
        console.log(sessionID)
  
        // Update payment status in your booking schema
        await updatePaymentStatus(sessionID);
  
        console.log('Payment status updated for session:', sessionID);
        break;
  
      default:
        // Unexpected event type
        console.log(`Unhandled event type: ${event.type}`);
    }
  
    res.status(200).end();
  });

//   router.post('/update-payment-status', async (req, res) => {
//     const { sessionID } = req.body;

//     try {
//         const booking = await Booking.findOne({ sessionId: sessionID });
//         if (booking) {
//             booking.paymentStatus = 'Approved'; 
//             await booking.save();
//             res.json({ success: true, message: 'Payment status updated successfully' });
//         } else {
//             res.status(404).json({ success: false, message: 'Booking not found' });
//         }
//     } catch (error) {
//         console.error("Error updating payment status:", error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// });
const updatePaymentStatus = async (sessionID) => {
  try {
    const booking = await Booking.findOne({ sessionId: sessionID });
    if (booking) {
      booking.paymentStatus = 'Approved';
      await booking.save();
      console.log('Payment status updated successfully');
    } else {
      console.error('Booking not found');
    }
  } catch (error) {
    console.error('Error updating payment status:', error);
  }
};

  module.exports = router;