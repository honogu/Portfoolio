import './Layout.css';
import NavBar from "./NavBar";
import Header from "./Header";
import Content from './Content';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <NavBar/>
            <div className='container'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </>
    )
}

export default Layout;