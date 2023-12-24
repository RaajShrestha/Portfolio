import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Project"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/contact"
import './App.css';
import Education from "./pages/Education/Education"

function App() {
  return (
    <>
    <main className='main'>
      <Home />
      <Header />
      <Footer />
      <About />
      <Projects />
      <Education />
      <Blog />
      <Contact />
    </main>
    </>
  );
}

export default App;
