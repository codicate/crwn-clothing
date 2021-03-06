import express from 'express';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import enforce from 'express-sslify';

import Stripe from 'stripe';


const buildPath = 'client/build';
const port = process.env.PORT || 5000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, buildPath)));

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, buildPath, 'index.html'));
  });

} else {
  import('dotenv').then(dotenv =>
    dotenv.config()
  );
}

app.listen(port);


app.get('/service-worker.js', (_, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payment', async (req, res) => {
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