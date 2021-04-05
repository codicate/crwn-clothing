import styles from 'components/Directory.module.scss';
import DIRECTORY_DATA from 'data/directory.json';
import MenuItem from 'components/MenuItem';

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

