import styles from '../styles/Header.module.css'
import Image from 'next/image';
import image from '../public/images/hero.jpg';


const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="#">shippers!</a>
      <div className={styles.avatarBlock}>
        <div className={styles.avatar}>
        <Image src={image} alt="avatar" className={styles.avatar} width={50} height={50}/>
        </div>
        <p className={styles.paragraph}>mogwai</p>
      </div>

    </div>
  )
}

export default Header
