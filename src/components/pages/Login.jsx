import Form from "../Form.jsx";
import classes from "../../assets/Login.module.css";
import Illustration from "../Illustration.jsx";
import TextInput from "../TextInput";
import Button from "../Button.jsx";
export default function Login(){
    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.login}`}>
                    <TextInput type="email" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <Button>Login</Button>

                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </div>
    );
}