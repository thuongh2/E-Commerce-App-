import express from "express";
import Stripe from "stripe";
const KEY = "sk_test_51LEnsKEG3WpMZRsnz5fTiotIVfMMZA5p6v4LYr9q7WK4GCU9cEfhCvI88mUpkPX6j0IfRyh0WPnCXiU8Dfo2SP6d00g6hEvFXe"

const stripe = new Stripe(KEY)

const router = express.Router();

router.post("/payment", (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  });

export default router
