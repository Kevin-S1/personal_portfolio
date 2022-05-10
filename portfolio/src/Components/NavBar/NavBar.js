import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <section className='navbar'>
        <div className='navbar--icon--container'>
            <Link to='/' className='icon'>About me</Link>
            <Link to='/' className='icon'>Tech</Link>
            <a className='icon'>Projects</a>
            <a className='icon'>Github</a>
        </div>
    </section>
  );
}

export default NavBar;
