import "./Navbars.css";
import logo from "./assets/logo-groovy.png";
const Navbars = () => {
    return (
        <>
            <nav className="navs navbar navbar-expand-xl navbar-light ">
                <div className="container-fluid">
                    <a className="logo-div" href="#">
                        <img src={logo} width={170} height={45.78} alt="logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <div className="dropdown">
                                    <button
                                        className="nav-item dropbtn"
                                        style={{ padding: "1px 6px" }}
                                    >
                                        Home
                                        <i className="ps-2 fa-solid fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item dropdown">
                                    <button className="dropbtn ">
                                        Header Styles
                                        <i className="ps-2 fa-solid fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item dropdown">
                                    <button className="dropbtn ">
                                        Post Features
                                        <i className="ps-2 fa-solid fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nav-item dropdown">
                                    <button className="dropbtn ">
                                        #Tag
                                        <i className="ps-2 fa-solid fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="nav-item dropbtn"
                                    style={{ padding: "1px 6px" }}
                                >
                                    <a href="#">Author</a>
                                </div>
                            </li>
                            <li>
                                {" "}
                                <div className="nav-item dropdown">
                                    <button className="dropbtn ">
                                        Features
                                        <i className="ps-2 fa-solid fa-caret-down"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div
                                    className="nav-item dropbtn"
                                    style={{ padding: "1px 6px" }}
                                >
                                    <a href="#">Contact</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbars;
