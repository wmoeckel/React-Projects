import { useImperativeHandle } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return <nav className="nav">
       <Link to="/" className="site-title">SpokaneMusicScene.com</Link>
       <ul>
            <Customlink to="/Home">Home</Customlink>
            <Customlink to="/Calendar">Calendar</Customlink>
            <Customlink to="/Bands">Bands</Customlink>
            <Customlink to="/Venues">Venues</Customlink>
            <Customlink to="/Shops">Shops</Customlink>
            <Customlink to="/Jams">Jams</Customlink>
            <Customlink to="/Teachers">Teachers</Customlink>
        </ul>
    </nav>
}
function Customlink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}