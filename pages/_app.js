import Layout from '../components/Layout'
import '../styles/globals.css'
import React from "react"
import { wrapper } from "../redux/store"

const MyApp = ({ Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default wrapper.withRedux(MyApp);

