import { useState } from 'react'
import Header from "./Components/Header/header.jsx"
import Footer from "./Components/Footer/footer.jsx"
import Banner from "./Components/Banner/banner.jsx"
import './App.css'
import Container from './Components/Container/container.jsx'
import Card from './Components/Card/card.jsx'
import Main from './Components/Main/Main.jsx'


function App() {


  return (
    <>
      <Header />
      <Banner image="cinema" />
      <Container>
        <h2>Lista de Filmes </h2>
        <Card />
        
      </Container>
      <Main/>
      <Footer />
    </>
  )
}

export default App
