import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__top">
                <div className="navbar__link">Home</div>
                <div className="navbar__link">About</div>
                <div className="navbar__link">University of Wales</div>
                <div className="navbar__link">Study at MTI</div>
                <div className="navbar__link">Faculties</div>
                <div className="navbar__link">Student Portal</div>
                <div className="navbar__link">Activities</div>
                <div className="navbar__link">IT Center</div>
            </div>
            <div className="navbar__bottom">
                <div className="navbar__link">Training Center</div>
                <div className="navbar__link">Language Center</div>
                <div className="navbar__link">Contact Us</div>
                <div className="navbar__link">Library</div>
                <div className="navbar__link">Quality Managment Center</div>
                <div className="navbar__link">E-Learning</div>
            </div>
            <div className="burger">
                <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
