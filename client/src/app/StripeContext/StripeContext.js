import React, { createContext, useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const StripeContext = createContext();

export const useStripe = () => useContext(StripeContext);

export const StripeProvider = ({ children }) => {
  const [stripe, setStripe] = useState(null);

  // Load Stripe
  loadStripe('pk_test_51NO0eJITaueKIebSFIUc8DRJuY3i04evrwu2qipVRiIkwS1X6YMomm4SaQnbtSNh5l3fZBDfnt7gF250ss8CO6LB00Gns9ok1i').then((stripeInstance) => {
    setStripe(stripeInstance);
  });

  return (
    <StripeContext.Provider value={stripe}>
      {children}
    </StripeContext.Provider>
  );
};