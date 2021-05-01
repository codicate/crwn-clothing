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
      image=''

      stripeKey={stripeKey}
      amount={priceInCent}
      token={(token) => {
        console.log(token);
        alert('Payment Successful');
      }}
    />
  );
};

export default StripeCheckoutBtn;
