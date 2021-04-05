import styles from 'pages/Homepage/Homepage.module.scss';

import Directory from 'pages/Homepage/Directory';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
}

