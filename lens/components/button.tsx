import styles from '../styles/Home.module.css';

const Button = ({handleConnect}) => {
    return (
        <button className={styles.button} onClick={handleConnect}>connect wallet</button>
    )
}

export default Button