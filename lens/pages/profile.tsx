import Head from 'next/head'
import { getAllProfiles } from '../lensapi/profile/profile';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/Profile.module.css'
import Image from 'next/image';
import image from '../public/images/bighead.jpeg';

const Profile = () => {
    const [profiles, setProfiles] = useState([]);
    const getProfile = async () => {
        const profile = await getAllProfiles();
        setProfiles(profile.data.profiles.items);
    }

    getProfile();

    return (
    <div className={styles.container}>
        <Head>
            <title>Profile</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
          <div className={styles.leftSide}>
              <div className={styles.avi}>
              <Image src={image} width={80} height={80} alt="avi" />
              </div>
              <p>justin irabor</p>
              <p>@mogwai</p>
              <p>randomly-generated cosmic asset.</p>
          </div>
          <div className={styles.rightSide}>
              <div className={styles.nav}>
                <div className={styles.banners}>🌍 global</div>
                <div className={styles.banners}>👇 your stuff</div>
                <div className={styles.banners}>🔥 cliques</div>
              </div>
              <div className={styles.contentArea}>
            <div className={styles.statusContainer}>
                <div className={styles.statuses}>
                    <p>Hey there comrades.</p>
                    <p>I've been thinking...</p>
                    <p>What would it take to begin an all-out war against all living things?</p>
                    <div className={styles.meta}>
                        <p className={styles.signature}>@mogwai.test</p>
                        <p>2 hours ago</p>
                        <p>0x98e893f83983e...</p>
                    </div>
                </div>
                <div className={styles.statuses}>
                    <p>Hey there comrades.</p>
                    <p>I've been thinking...</p>
                    <p>What would it take to begin an all-out war against all living things?</p>
                    <div className={styles.meta}>
                        <p className={styles.signature}>@mogwai.test</p>
                        <p>2 hours ago</p>
                        <p>0x98e893f83983e...</p>
                    </div>
                </div>
                <div className={styles.statuses}>
                    <p>Hey there comrades.</p>
                    <p>I've been thinking...</p>
                    <p>What would it take to begin an all-out war against all living things?</p>
                    <div className={styles.meta}>
                        <p className={styles.signature}>@mogwai.test</p>
                        <p>2 hours ago</p>
                        <p>0x98e893f83983e...</p>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>Hey</div>
            </div>
            <div>
            </div>
          </div>
      </main>
    </div>
    )
}

export default Profile;