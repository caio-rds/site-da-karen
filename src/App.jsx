import ThemeContextProvider from './context/ThemeContext'
import './App.css'
// import Services from './components/services/index'
import HomeTemplate from './templates/home'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {  

  return (
    <>
      <ThemeContextProvider>
        <HomeTemplate />
        {/* <Services /> */}
      </ThemeContextProvider>
    </>
  )
}

export default App
