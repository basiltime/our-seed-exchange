import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Header from './header.js';


export default function Layout({children}) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Our Seed Exhange is a Garden Seed Swapping Community"
        />
    </Head>
    <Header />
    <div className="container mx-auto p-5">
        <main>{children}</main>
    </div>
    </>
  );
}
