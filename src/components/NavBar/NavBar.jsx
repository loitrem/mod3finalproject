import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }

    return (
        <nav className='navbar'>
            <div className="navbarInner">
                &nbsp;&nbsp; <span className='welcomeUser'>Welcome, {user?user.name:''}</span>
                &nbsp;&nbsp;
                <Link to='' className='logout' onClick={handleLogOut}>
                    Log Out
                </Link>
            </div>
        </nav>
    );
}