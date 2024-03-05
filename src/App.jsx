import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
// import About from './components/about/About';
// import Resume from './components/resume/Resume';
// import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <>
    <Navbar />
    <main className='main'>
      <Home />
      {/* <About />
      <Resume />
      <Portfolio /> */}
    </main>
    </>
  )
};

export default App
