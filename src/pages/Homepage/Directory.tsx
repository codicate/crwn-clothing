import styles from 'pages/Homepage/Directory.module.scss';
import DIRECTORY_DATA from 'data/directory.json';
import MenuItem from 'pages/Homepage/MenuItem';

const Directory = () => (
  <div className={styles.directoryMenu}>
    {
      DIRECTORY_DATA.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))
    }
  </div>
);

export default Directory;

