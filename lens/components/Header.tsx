import styles from '../styles/Header.module.css'
import Button from './button';


const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="#">shippers!</a>
      <Button />
    </div>
  )
}

export default Header
