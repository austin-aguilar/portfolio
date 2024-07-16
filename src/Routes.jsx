import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './components/landing/Landing';
import NoPage from './components/noPage/NoPage';


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<NoPage/>} />   
            </Routes>
        </BrowserRouter>
       
    )
}

export default AppRoutes