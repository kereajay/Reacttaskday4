import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from  "./Nav.jsx"
import Card from "./Card.jsx"
import Data from "./Data.jsx"
import Footer from './Footer.jsx'

function App() {
 return(
  <>

  <Nav />

  {
    Data.map((item,idx)=>{
      return <Card key={idx} para={item.para} author={item.author}/>
    })
  }

  <Footer />
 
  </>
 )
}

export default App
