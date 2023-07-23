import Illastration from "../Illastration.jsx";
import Form from "../Form.jsx";
import classes from "../../assets/Signup.module.css";
import TextInput from "../TextInput.jsx";
import Checkbox from "../Checkbox.jsx";
import Button from "../Button.jsx";
export default function Signup(){
    return (
        <div>
            <h1>Create an account</h1>
            <div className="column">
                <Illastration />
                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="email" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Enter confirm password" icon="lock_clock" />

                    <Checkbox text="I agree to the Terms & Conditions"/>

                    <Button>Submit Now</Button>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </div>
    );
}