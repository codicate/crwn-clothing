import styles from 'pages/Header/ShoppingIcon.module.scss';

import { ReactComponent as Icon } from 'assets/shopping-bag.svg';

const ShoppingIcon = ({ clickHandler }:
  {
    clickHandler(): void;
  }
) => {
  return (
    <div className={styles.shoppingIconContainer} >
      <Icon
        className={styles.shoppingIcon}
        onClick={clickHandler}
      />
      <span className={styles.itemCount}>
        0
      </span>
    </div>
  );
};

export default ShoppingIcon;
