import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div>
                <div className="hero__left">
                    <div className="left__image">
                        <img src="/images/no.jpg" alt="no" />
                    </div>
                    <div className="left__text">
                        <h3>Welcome</h3>
                        <p>Please login</p>
                    </div>
                    <div className="login__help">
                        <p>Student login help</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero__right">
                    <div className="st__login">
                        <img src="/images/stlogin.jpg" alt="login" />
                    </div>
                    <div className="login__idImage">
                        <img src="/images/id-email2.jpg" alt="login" />
                    </div>
                    <div className="right__inputContainer">
                        <p>Email:</p>
                        <input type="text" />
                    </div>
                    <div className="login__buttonContainer">
                        <Link to="/dashboard" className="login__button">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
