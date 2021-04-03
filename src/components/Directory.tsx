import styles from 'components/Directory.module.scss';

import MenuItem from 'components/MenuItem';


export default function Directory({ sections }
  : {
    sections: {
      title: string;
      imageUrl: string;
      id: number;
      size?: string;
    }[];
  }
) {

  return (
    <div className={styles.directoryMenu}>
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}