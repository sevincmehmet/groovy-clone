import Navbars from "./Navbars";
import ImagesPath from "./assets/images/ImagesPath";

import "./Main.css"

const Main = () => {
    return (
        <>
            <div className="container-xl main-cont">
                <div className="smal-cont">
                    <Navbars />
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="d-flex category-cont">

                                <div className="img-cont">
                                    <img src={ImagesPath.cateImg_0} alt="" />
                                </div>

                                <div className="write-cont">


                                    <div className="write-cont-article">
                                        <div className="d-flex write-cont-header">
                                            <button className="buttons"><span>A</span> Travel</button>
                                            <div className="date">
                                                september 26, 2019
                                            </div>
                                            <div className="min">
                                                <i className="fa-sharp fa-solid fa-circle"></i>
                                                1 min read
                                            </div>
                                        </div>
                                        <div className="write-cont-title underline-effect h2 fw-bold">
                                            <a href="#">                                            The spectacle before us was indeed sublime
                                            </a>
                                        </div>

                                        <div className="write-cont-text h6 fw-light lh-base">
                                            Welcome, it’s great to have you here. We know that first    impressions are important, so we’ve populated your new site with some initial getting started posts that will help you get familiar…
                                        </div>

                                        <div className=" d-flex write-cont-footer justify-content-between">
                                            <button className="buttons float-start">
                                                Continue Reading -{">"}
                                            </button>
                                            <div className="d-flex profile float-end">
                                                <div className="profile-photo ">
                                                    <img className="rounded-circle" src={ImagesPath.avatar_1} alt="profile-photo" />
                                                </div>
                                                Jonathan Doe
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* left container */}
                        <div className="col-sm-4 "></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main;