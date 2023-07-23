import Account from "./Account";
import classes from "../assets/Nav.module.css";
import logo from '../assets/images/logo-bg.png'
export default function Nav(){
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="Learn with React Logo"/>
                        <h3>Learn with React</h3>
                    </a>
                </li>
            </ul>
            <Account/>
        </nav>
    )
}