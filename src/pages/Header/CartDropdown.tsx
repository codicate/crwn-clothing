

import styles from 'pages/Header/CartDropdown.module.scss';

import Button from 'components/Button';

const CartDropdown = () => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems} />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
