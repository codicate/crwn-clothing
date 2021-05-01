import styles from 'pages/Homepage/Homepage.module.scss';

import DIRECTORY_DATA from 'data/directory.json';
import MenuItem from 'pages/Homepage/MenuItem';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.directoryMenu}>
        {
          DIRECTORY_DATA.map(({ id, ...props }) => (
            <MenuItem key={id} {...props} />
          ))
        }
      </div>
    </div>
  );
}

