import React from "react";
import Photos1 from "./photo1";
import Photos2 from "./photos2";
import Photos3 from "./photo3";
import Photos4 from "./photo4";
import Photos5 from "./photo5";
import Photos6 from "./photo6";
import Photos7 from "./photo7";
import Photos8 from "./photo8";
function Grid() {

    return (
        <>
            {/* <div className="bg"> */}
            <div className="flex">
                <Photos1 />
                <div className="content">
                    <div className="text">
                        <p className="p3">BIBIMBAB DISH</p>
                        <p className="p4">19$</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Photos2 />
                <div className="content">
                    <div className="text">
                        <p className="p3">PALEO BEEF DISH</p>
                        <p className="p4">32$</p>
                        <button className="btn">click here</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex">
                    <Photos3 />
                    <div className="content">
                        <div className="text">
                            <p className="p3">ITALIAN SOURCE MUSHROOM</p>
                            <p className="p4">30$</p>
                            <button>click here</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Photos4 />
                <div className="content">
                    <div lassName="text">
                        <p className="p3">SPRING ROLLS</p>
                        <p className="p4">12$</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            <div class="flex">
                <Photos5 />
                <div class="content2">
                    <div className="text">
                        <p className="p3"> CORTIGIANO DISH</p>
                        <p className="p4">29$</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            <div class="flex">
                <Photos6 />
                <div class="content2 ">
                    <div className="text">
                        <p className="p3">GREEN CURRY DISH</p>
                        <p className="p4">15$</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            <div class="flex">
                <Photos7 />
                <div class="content2 ">
                    <div className="text">
                        <p className="p3">INDIAN DISH </p>
                        <p className="p4">20$</p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            <div class="flex">
                <Photos8 />
                <div class="content2">
                    <div className="text">
                        <p className="p3">PICCATA </p>
                        <p className="p4"> 16$ </p>
                        <button>click here</button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )

}
export default Grid;