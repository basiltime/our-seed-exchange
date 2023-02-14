import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Header from './header.js';

const name = 'Krystal Canfield';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Our Seed Exhange is a Garden Seed Swapping Community"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
