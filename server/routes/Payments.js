const express = require('express');
const stripe = require('stripe')('sk_test_51NO0eJITaueKIebSG63NCL9BrtB8DKE3LretZtwB3ErDzj68x0yVhCVBx0RnKq9ujIposYRpeus0VeOfSBssMrV400ajOwtvCb');
const bodyParser = require('body-parser');

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const data = req.body
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: data?.username
            },
            unit_amount: 100, // in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
    res.json({ id: session.id });
  });

  module.exports = router;