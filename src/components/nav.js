import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';


const Nav = (props) => {

    const navStyles = {
         padding: '0 10px'
    };

    function renderAuthLinks(){
        if (props.auth){
            return (
                <li><Link onClick={props.logout} to='/'>Log Out</Link></li>
            )
        } return [
                <li key='0'><Link to='/sign-in'>Sign In</Link></li>,
                <li key='1'><Link to='/sign-up'>Sign Up</Link></li>
            ]
        }

    return(
        <nav className='cyan lighten-1' style={navStyles}>
            <Link to='/' className='brand-logo left'>Movie Quotes</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movie-quotes'>Movie Quotes</Link></li>
                {renderAuthLinks()}
            </ul>
        </nav>
    );
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { logout })(Nav);
