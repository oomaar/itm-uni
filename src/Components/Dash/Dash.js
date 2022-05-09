import "./Dash.css";

const Dash = () => {
    return (
        <div className="dash">
            <div className="welcome__container">
                <div className="dash__left">
                    <div className="dash__image">
                        <img src="/images/no.jpg" alt="no" />
                    </div>
                    <div className="dash__text">
                        <h3>Welcome</h3>
                        <p>Mirna Mahmoud Mohamed AbdElManaiem ElMalah</p>
                    </div>
                </div>
            </div>
            <div className="result">
                <h1 className="result__title">Result: fall 2020</h1>
                <div className="results">
                    <div className="th">
                        <p>Material</p>
                        <p>Grade</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">Oral pathology (OPMS 311)</p>
                        <p className="grade">B</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">Operative Dentistry Technology (OPD 311)</p>
                        <p className="grade">C</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">Removal Prosthodontics Technology (RPROSD311)</p>
                        <p className="grade">C</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">Fixed Prosthodontics Technology (FPROSD221)</p>
                        <p className="grade">B</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">Radiology (RDO311)</p>
                        <p className="grade">C</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">General Sergry (GSO311)</p>
                        <p className="grade">C</p>
                    </div>
                    <div className="result__bar">
                        <p className="name">Endodontic(ENDO311)</p>
                        <p className="grade">C</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash;
