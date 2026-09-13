import { Suspense } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
       <Suspense fallback={<p>Loading...</p>}>
        <Technologies />
      </Suspense>
      <ToastContainer></ToastContainer>

      {/* <Technologies></Technologies> */}

    </>
  )
}

export default App
