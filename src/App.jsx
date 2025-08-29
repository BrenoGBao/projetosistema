import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./routes/Home"
import Cliente from "./routes/Cliente"
import Error from "./routes/Error"
import Footer from "./components/Footer"


function App() {
  

  return (
    // Habilita a a navegação por rotas
    <BrowserRouter>
    <Nav/>
    <main>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/"element={<Home/>}/>
        <Route path="/cliente"element={<Cliente/>}/>

      </Routes>
    </main>
    <Footer/>
      
    </BrowserRouter>
  )
}

export default App
