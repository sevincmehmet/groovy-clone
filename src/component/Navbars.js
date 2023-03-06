import "./Navbars.css"
import logo from "./assets/logo-groovy.png"
const Navbars = () => {

    return (
        <>
            <nav className="navs navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width={170} height={45.78} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div class="dropdown">
                                <button class="nav-item dropbtn">Dropdown
                                    <i class="ps-2 fa-solid fa-caret-down"></i></button>
                                <div class="dropdown-content">

                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <button class="dropbtn">Dropdown
                                    <i class="ps-2 fa-solid fa-caret-down"></i></button>
                                <div class="dropdown-content">

                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <button class="dropbtn">Dropdown
                                    <i class="ps-2 fa-solid fa-caret-down"></i></button>
                                <div class="dropdown-content">

                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <button class="dropbtn">Dropdown
                                    <i class="ps-2 fa-solid fa-caret-down"></i></button>
                                <div class="dropdown-content">

                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div class="nav-item dropbtn">

                                <a href="#">Link 1</a>

                            </div>
                            <div class="nav-item dropdown">
                                <button class="dropbtn">Dropdown
                                    <i class="ps-2 fa-solid fa-caret-down"></i></button>
                                <div class="dropdown-content">

                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div class="nav-item dropbtn">

                                <a href="#">Link 1</a>

                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbars;