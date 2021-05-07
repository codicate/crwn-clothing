import styles from 'pages/Homepage/MenuItem.module.scss';

import { useHistory } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size }:
  {
    title: string,
    imageUrl: string,
    size?: string;
  }
) => {
  const history = useHistory();

  return (
    <div
      className={`${styles.menuItem} ${size ? styles[size] : ''}`}
      onClick={() => history.push(`/shop/${title}`)}
    >
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

