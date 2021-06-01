import styles from 'components/ErrorFallback.module.scss';

function ErrorFallback() {
  return (
    <div className={styles.errorImageOverlay}>
      <div className={styles.errorImageContainer} />
      <p className={styles.errorImageText}>
        Something went wrong
      </p>
    </div>
  );
}

export default ErrorFallback;
