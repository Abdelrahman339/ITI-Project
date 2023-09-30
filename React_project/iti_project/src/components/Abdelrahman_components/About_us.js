import React from 'react';

function About_us() {
    return (

        <div className="section1 " id="About">
            <div className=" contanier">
                <div className="Photos1">
                    <img className='forward-img' src={require('./images/about-us/about us 1.png')} alt='' />
                    <img className='backward-img' src={require('./images/about-us/about us 2.png')} alt='' />
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
                    <div className="button">
                        <button>clik here</button>
                    </div>
                    <div className="Photos2">
            <img src={ require('./images/about-us/about us 3.png')} />
        </div>
                </div>
            </div>
        </div>

    );
}
export default About_us;