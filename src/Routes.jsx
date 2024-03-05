import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import NoPage from './components/noPage/NoPage';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />       
                <Route path="/projects" element={<Projects />} /> 
                <Route path="*" element={<NoPage/>} />      
            </Routes>
        </BrowserRouter>
       
    )
}

export default AppRoutes