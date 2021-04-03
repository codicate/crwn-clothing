import styles from 'components/MenuItem.module.scss';

export default function MenuItem({ title, imageUrl, size }
  : {
    title: string,
    imageUrl: string,
    size?: string;
  }
) {
  return (
    <div className={styles.menuItem + ' ' + styles[`${size}`]}>
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

