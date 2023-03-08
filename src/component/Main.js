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
                        <div className="col-sm-8 left-cont">
                            <Category />
                        </div>
                        {/* left container */}
                        <div className="col-sm-4 right-cont"></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main;