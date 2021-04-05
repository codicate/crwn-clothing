import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from 'pages/Homepage/MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, size, history, match }:
  {
    title: string,
    imageUrl: string,
    size?: string;
  } & RouteComponentProps
) => (
  <div
    className={`${styles.menuItem} ${size ? styles[size] : ''}`}
    onClick={() => history.push(`${match.url}item/${title}`)}
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

export default withRouter(MenuItem);

