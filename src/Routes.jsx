import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About'
import Projects from './components/projects/Projects';
import NoPage from './components/noPage/NoPage';
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<About />} />       
                <Route path="/projects" element={<Projects />} /> 
                <Route path="*" element={<NoPage/>} />
                <Route path="/contact" element={<Contact/>} />    
                <Route path="/resume" element={<Resume />}/>  
            </Routes>
        </BrowserRouter>
       
    )
}

export default AppRoutes