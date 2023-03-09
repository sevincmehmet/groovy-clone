import Navbars from "./Navbars";
import Category from "./Category";
import WidgetBox from "./WidgetBox";
import AboutMeSection from "./AboutMeSection";
import arrWidgetBox from "./data/arrWidgetBox";
import TagCloud from "./TagCloud"
import RecentPosts from "./RecentPosts";
import FollowMe from "./FollowMe";
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
                            {/* <div className="widget-box position-relative border border-secondary">
                                <div className="widget-title p-2 border border-2 border-secondary rounded-pill " style={{ padding: "4px 25px" }}>
                                    About Me
                                </div>

                                <div className="d-flex about-profile">
                                    <img

                                        className="profile-photo border border-secondary rounded-circle"
                                        style={{ width: "80px" }}
                                        src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="profile-photo" />

                                    <div className="user ms-3">
                                        <div className="userName underline-effect pb-1">
                                            <a href="#" style={{ textDecoration: "none", color: "var(--black-color)", fontWeight: "600", fontSize: 18 }}>Jonathan Doe</a>
                                        </div>
                                        <div className="userJob f-source mb-1 fw-400" style={{ fontSize: "14px" }}>
                                            Founder & Editor
                                        </div>
                                        <div className="social-icons">
                                            iconlar
                                        </div>
                                    </div>
                                </div>
                                <div className="about-text h6 lh-lg f-source fw-400" style={{ fontSize: 14, marginTop: "15px", marginBottom: "0", color: "var(--text-color)" }}>
                                    Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.

                                </div>
                            </div> */}
                            {arrWidgetBox.map((oItem, oIndex) => {
                                return (
                                    <div key={oIndex}>
                                        <WidgetBox
                                        title={oItem[0]}
                                        articleSection={oItem[1]}
                                    />
                                    </div>
                                    )
                            })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main;