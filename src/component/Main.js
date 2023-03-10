import Navbars from "./Navbars";
import Category from "./Category";
import WidgetBox from "./WidgetBox";
import Footer from "./Footer";
import arrWidgetBox from "./data/arrWidgetBox";

import "./Main.css"
import { useEffect, useState } from "react";



const Main = () => {

    const[scrolActive, setScroolActive] = useState(false)
    const [top, setTop] = useState(0);

    const scroolAnimate = () => {
    if (window.scrollY > 280) {
        setScroolActive(true)
    } else if (window.scrollY < 250) {
        setScroolActive(false)
    }

    if (window.scrollY > 850) {
        
    }

};

window.addEventListener("scroll", scroolAnimate);

    return (
        <>
            <div className="container-xl main-cont">
                <div className="smal-cont">
                    <Navbars scrolActive={scrolActive}/>
                    <div className={scrolActive? "row t-300": "row"}>
                        
                        {/* left-container */}
                        <div className="col-sm-8 left-cont ">
                            <Category />

                            <div className="d-flex justify-content-center">
                            <h6 className="me-4">
                                Page of <span>1/3</span>
                            </h6>
                            <button className="buttons bg-danger text-light">
                                Next
                            </button>
                            </div>
                        </div>


                        {/* right container */}
                        <div className="col-sm-4 right-cont position-relative" >
                            <div className="position-cont" style={{ minHeight:2000}}>
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

            </div>

            <div className="footer">
                <Footer />
            </div>

        </>
    )
}

export default Main;