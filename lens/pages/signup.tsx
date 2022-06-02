import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import SignUpForm from '../components/forms/SignUpForm';

const Signup = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="signup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className={styles.signupContainer}>
       <Header />
       <div className={styles.signupCard}>
          <h1 className={styles.h1}>create profile</h1>
          <h2 className={styles.h2}>We don&apos;t need much. Just a username. Everything else is optional!</h2>
          <SignUpForm />
       </div>
     </main>
    </div>
  )
}

export default Signup
