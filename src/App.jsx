import './App.css'
import Footer from './components/Footer'
import Habilities from './components/Habilities'
import HeaderNav from './components/HeaderNav'
import Inicio from './components/Inicio'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {


  return (
    <div>
    <HeaderNav/>
    <Inicio/>
    <br/>
    <br/>
    <Skills/>
    <br/>
     <Portfolio/>
     <Habilities/>
     <br/>
     <Footer/>
    </div>
  )
}

export default App
