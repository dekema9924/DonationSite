import Blog from "./components/Blog"
import Donate from "./components/Donate"
import Footer from "./components/Footer"
import Header from "./components/Header"
import JoinUs from "./components/JoinUs"
import LandingPage from "./components/LandingPage"
import Logos from "./components/Logos"
import Mission from "./components/Mission"
import Rating from "./components/Rating"
import Service from "./components/Service"
function App() {

  return (
      <>
        <Header/>
        <LandingPage/>
        <Logos/>
        <JoinUs/>
        <Mission/>
        <Service/>
        <Blog/>
        <Rating/>
        <Donate/>
        <Footer/>
      </>
  )
}

export default App
