import Navbars from "./Navbars";
import ImagesPath from "./assets/images/ImagesPath";
import Category from "./Category";
import "./Main.css"

const Main = () => {
    return (
        <>
            <div className="container-xl main-cont">
                <div className="smal-cont">
                    <Navbars />
                    <div className="row">
                        {/* left-container */}
                        <div className="col-sm-8 left-cont">
                            <Category />
                        </div>
                        {/* right container */}
                        <div className="col-sm-4 right-cont">
                            <div className="widget-box position-relative">
                                <div className="widget-title p-2 border border-2 border-secondary rounded-pill " style={{padding:"4px 25px"}}>
                                    About Me
                                </div>

                                <div className=" about-profile">
                                    <div className="d-flex">
                                        <img className="border border-secondary rounded-circle" src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="profile-photo" width={80} />

                                        <div className="user">
                                            <div className="userName">
                                                Jonathan Doe
                                            </div>
                                            <div className="userJob">
                                                Founder & Editor
                                            </div>
                                            <div className="social-icons">
                                                iconlar
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-text h6 fw-light lh-base" style={{fontSize:15}}>
                                        Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main;