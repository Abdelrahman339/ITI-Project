import React from 'react';
import Photos2 from './Photos2';
import Photos1 from './Photos1';
import Button from './button';

function About_us() {
    return (
        <div className="section1 " id="About">
            <div className=" contanier">
                <div className="Photos1">
                    <Photos1 />
                </div>
                <div className="about_us">
                    <div className="heading">
                        <h1>about us</h1>
                        <h3>WE ARE TASTY</h3>
                    </div>
                    <div className="paragraph">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat fugit at delectus ut
                            iusto.</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima illum saepe!
                            Reprehenderit minus, delectus tenetur velit numquam necessitatibus, nihil sit veritatis
                            consequatur in dolore? Eum nobis eos eaque odit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sequi dignissimos culpa accusantium molestiae explicabo, labore nihil placeat
                            velit sit, nobis fugiat delectus ut non totam odit voluptate, suscipit adipisci illum!</p>
                    </div>
                    <Button/>
                    <div className="Photos2">
                        <Photos2/>
        </div>
                </div>
            </div>
        </div>

    );
}
export default About_us;