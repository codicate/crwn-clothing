import styles from 'pages/Homepage.module.scss';

import Directory from 'components/Directory';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
}

