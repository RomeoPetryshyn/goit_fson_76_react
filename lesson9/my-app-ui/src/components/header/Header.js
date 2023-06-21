import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Header () {
    const handleActiveStyle = ({ isActive }) => {
        return { color: isActive ? "red" : "black", marginRight: 20 };
    }

    return <div>

        <div>
            <NavLink to='/' style={handleActiveStyle}>Home</NavLink>
            <NavLink to='/posts' style={handleActiveStyle}>Posts</NavLink>
            <NavLink to='/about' style={handleActiveStyle}>About</NavLink>
            <NavLink to='/contact' style={handleActiveStyle}>Contact</NavLink>
        </div>
        

        <Outlet></Outlet>


        {/* <Link style={{marginRight: 20}} to='/'>Home</Link>
        <Link style={{marginRight: 20}} to='/about'>About</Link>
        <Link style={{marginRight: 20}} to='/posts'>Posts</Link> */}

        {/* <NavLink 
                to='/'
                style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "black",
                    };
                }}
        >
            Home LINK
        </NavLink>
        <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "black",
                    };
                }} to='/about'>
            About LINK
        </NavLink>

        <NavLink style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "red" : "black",
                    };
                }} to='/posts'>
            Posts LINK
        </NavLink> */}
    </div>
}

export default Header;