import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src="/images/logo-footer.png" alt="logo" />
                </div>
                <div className="rows">
                    <div className="row">
                        <p className="footer__title">About MTI</p>
                        <p className="footer__link">History</p>
                        <p className="footer__link">Mission & Vision</p>
                        <p className="footer__link">Why MTI?</p>
                    </div>
                    <div className="row">
                        <p className="footer__title">University of Wales</p>
                        <p className="footer__link">Introduction</p>
                    </div>
                    <div className="row">
                        <p className="footer__title">Study at MTI</p>
                        <p className="footer__link">Fees (2019/2020)</p>
                        <p className="footer__link">Academic</p>
                        <p className="footer__link">Calendar</p>
                        <p className="footer__link">How to apply</p>
                        <p className="footer__link">Library & facilities</p>
                    </div>
                    <div className="row">
                        <p className="footer__title">Faculties</p>
                        <p className="footer__link">Computers and Artificial Intelligence</p>
                        <p className="footer__link">Engineering Mass Communication</p>
                        <p className="footer__link">Pharmacy</p>
                        <p className="footer__link">Management</p>
                        <p className="footer__link">Dentistry</p>
                        <p className="footer__link">Nursing</p>
                        <p className="footer__link">Physical Therapy</p>
                        <p className="footer__link">Medicine</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
