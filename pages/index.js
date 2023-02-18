import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export async function getStaticProps(context) {
  const checkLoggedIn = await fetch(`http://localhost:3000/api/isLoggedIn`);
  const loggedIn = await checkLoggedIn.json()
  
  return {
    props: { loggedIn: loggedIn}, // will be passed to the page component as props
  }
}



export default function Home({ loggedIn }) {  
  console.log(loggedIn);
  return (
    <>
    <Head>
      <title>Our Seed Exhange</title>
    </Head>

    <h1>Welcome to Our Seed Exchange</h1>
    </>

  )
}
