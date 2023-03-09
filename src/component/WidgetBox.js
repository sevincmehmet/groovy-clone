const WidgetBox  = ({title, articleSection}) => {
    return(
        <>
        <div className="widget-box position-relative border border-secondary">
                                <div className="widget-title p-2 border border-2 border-secondary rounded-pill " style={{ padding: "4px 25px" }}>
                                    {title}
                                </div>

                                {/* <div className="d-flex about-profile">
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

                                </div> */}
                            {articleSection}

                            </div>
        </>
    )
}
export default WidgetBox;