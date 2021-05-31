import path from 'path';
import express from 'express';
import cors from 'cors';

import Stripe from 'stripe';


const buildPath = 'client/build';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, buildPath)));

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, buildPath, 'index.html'));
  });

} else {
  import('dotenv').then(dotenv =>
    dotenv.config()
  );
}

const port = process.env.PORT || 5000;
app.listen(port);


app.post('/crwn-clothing/payment', async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2020-08-27' });

    const charge = await stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
    });

    res.status(200).send({ sucess: charge });

  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err });
  }
});