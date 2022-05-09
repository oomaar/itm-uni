import { Navbar } from "..";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
