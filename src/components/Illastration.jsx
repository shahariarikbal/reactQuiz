import classes from "../assets/Illustration.module.css";
import signup from '../assets/images/signup.svg';
export default function Illastration(){
    return (
        <div className={classes.illustration}>
            <img src={signup} alt="Signup"/>
        </div>
    );
}