import styles from './Fallback.module.css';

function Fallback({ error, resetErrorBoundary }) {
  
  return (
    <div className={styles.fallback}>
      <h5>Something went wrong:</h5>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Refresh element</button>
    </div>
  );
}

export function logError(error, info) {
  console.error(error);
  console.error(info.componentStack);
}


export default Fallback;

