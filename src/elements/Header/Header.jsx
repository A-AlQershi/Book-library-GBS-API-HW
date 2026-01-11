import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.headerContainer}>
        <div className={styles.brand}>Aden Grand Library</div>
        <p className={styles.email}>info@adengrandlibrary.com</p>
        {/* <nav>
          <ul className={styles.list}>
            <li>
              <a href="">one</a>
            </li>
            <li>
              <a href="">two</a>
            </li>
            <li>
              <a href="">three</a>
            </li>
            <li>
              <a href="">four</a>
            </li>
            <li>
              <a href="">five</a>
            </li>
            <li>
              <a href="">six</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}


export default Header;