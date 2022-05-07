import './navbar.css';

function NavBar() {
  return (
    <section className='navbar'>
        <div className='navbar--icon--container'>
            <Link href='www.google.com' className='icon'>About me</Link>
            <a className='icon'>Tech</a>
            <a className='icon'>Projects</a>
            <a className='icon'>Github</a>
        </div>


    </section>
  );
}

export default NavBar;
