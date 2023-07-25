import classes from "../assets/Illustration.module.css";
import login from '../assets/images/login.svg';
export default function Illustration(){
    return (
        <div className={classes.illustration}>
            <img src={login} alt="Signin"/>
        </div>
    );
}