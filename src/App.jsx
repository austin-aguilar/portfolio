import "./App.css";
import Navbar from './components/navbar/Navbar';
import AppRoutes from './Routes'
// import About from './components/about/About';
// import Resume from './components/resume/Resume';
// import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
    <Navbar />
    <main className='main'>
      <AppRoutes />
    </main>
    </>
  )
};

export default App
