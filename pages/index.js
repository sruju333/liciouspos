import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import styles from '../styles/Home.module.css'

function Home(props) {
  const { name, setInfo } = props
  const [newName, setName] = useState("")

  return (
    <>
    <div>
    <Head>
       <title>Licious POS</title>
    </Head>
    </div>
    <div>
      <h2>Processing Orders</h2>
      <p>Orders</p>
    </div>
    
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setName(e.target.value)}>

        </input>
        <button onClick={() => setInfo(newName)}>
          Submit
        </button>
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return { name: state.main.name }
 }
 
 const mapDispatchToProps = {
   setInfo
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home)

 //here we add state management for updating and storing value of form

