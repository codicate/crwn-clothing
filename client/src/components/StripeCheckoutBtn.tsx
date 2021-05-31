import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';


const stripeKey = 'pk_test_51ImNGcHdgTeUx4ZbA5bCEFvogMyrIn1Tkl496802ELCfeLWqtLQabWWTeD7oMGT2ozjkdjCIRKGIbUQhyxQ1iaiH00qGqW5LWz';

const StripeCheckoutBtn = ({
  price
}: {
  price: number;
}) => {
  const priceInCent = price * 100;

  return (
    <StripeCheckout
      billingAddress
      shippingAddress

      name='CRWN Clothing Ltd.'
      label='Pay Now'
      panelLabel='Pay Now'
      description={`Your total is $${price}`}
      image='https://svgshare.com/i/CUz.svg'

      stripeKey={stripeKey}
      amount={priceInCent}
      token={async (token) => {
        console.log(token);

        try {
          const res = await axios({
            url: 'payment',
            method: 'post',
            data: {
              amount: priceInCent,
              token
            }
          });

          alert('Payment Successful');
          console.log('payment response:', res);

        } catch (err) {
          alert('Payment Unsuccessful');
          console.error('payment error:', err);
        }
      }}
    />
  );
};

export default StripeCheckoutBtn;
