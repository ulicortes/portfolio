import { Link } from 'react-router-dom';
export default function NavBar() {
    return <>
        <ul className="navbar">
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/proyects'><li>Proyects</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
    </>
}