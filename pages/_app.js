import '@/styles/globals.css'
import '@/styles/utils.css';
import Layout from '../components/layout'
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
    
  )
}
