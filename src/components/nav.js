import React from 'react';
import { Link } from 'react-router-dom';


const Nav = (props) => {

    const navStyles = {
         padding: '0 10px'
    }

    return(
        <nav className='cyan lighten-1' style={navStyles}>
            <Link to='/' className='brand-logo'>Movie Quotes</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movie-quotes'>Movie Quotes</Link></li>
                <li><Link to='/sign-in'>Sign In</Link></li>
                <li><Link to='/sing-up'>Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
