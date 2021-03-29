import "./Marquee.css";

const Marquee = () => {
    return (
        <nav className="marquee">
            <div className="title">
                <h3 className="title__text">LATEST NEWS</h3>
                <div className="title__chevron">
                    <img src="/images/chevron.png" alt="chevron" />
                </div>
            </div>
            <div className="marquee__container">
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    <p>
                    Faculty of Computers and Artificial Intelligence - Spring Semester Schedule 2021
                    </p>
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    The Faculty of Medicine announced the final result of Fall Semester 2020
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    The Faculty of Medicine announced the final result of Fall Semester 2020
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    MTI University announces the beginning of the military training session
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    Faculty of Medicine Starts Comprehensive Sterilization Of All Buildings
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    Faculty of Physical Therapy Starts Comprehensive Sterilization Of All Buildings
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    Faculty of Engineering Starts Comprehensive Sterilization Of All Buildings
                </div>
                <div className="marquee__item">
                    <img src="favicon.png" alt="logo" />
                    Faculty of Computers and Artificial Intelligence - Spring Semester Schedule 2021
                </div>
            </div>
        </nav>
    );
};

export default Marquee;
