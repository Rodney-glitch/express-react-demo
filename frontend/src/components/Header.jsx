import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <header>
            <div className='header'>
                <div className="logo">
                    <Link to='/'>GoalSetter</Link>
                </div>
                <ul>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaSignOutAlt /> Register
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;