import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='outletArea'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;