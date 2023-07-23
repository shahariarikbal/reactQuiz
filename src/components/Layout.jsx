import classes from "../assets/Layout.module.css";
import Nav from "./Nav.jsx";
// eslint-disable-next-line react/prop-types
export default function Layout({ children }){
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={ classes.container }>
                    { children }
                </div>
            </main>
        </>
    );
}