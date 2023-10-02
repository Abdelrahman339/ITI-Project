import React from "react";
function footer() {
    return (
        <footer id="footer">
            <div className="feedback" id="footer">
                <h2>Feedback</h2>
                <form action="">
                    <input type="text" placeholder="Name" /><br />
                    <input type="text" placeholder="Email" /><br />
                    <input type="text" placeholder="Phone" /><br />
                    <input type="text" placeholder="Message" /><br />
                    <button onclick="showAlert()">submit</button>
                </form>
            </div>
            <div className="working-hours">
                <h4>Working Hours</h4>
                <p>Monday to Friday</p>
                <p>8:00am to 10:00pm (Breakfast)</p>
                <p>11:00am to 10:00pm (lunch, dinner)</p>
                <h4>Saturday & Monday</h4>
                <p>10:00am to 11:00pm (Breakfast)</p>
                <p>11:00am to 12:00pm (lunch, dinner)</p>
            </div>
            <div className="links2">
                <ul className="links">
                    <li className="link-item">
                        <a className="link" href="#">
                            <i className="fab fa-facebook-f link-icon"></i>
                            Facebook
                        </a>
                    </li>
                    <li className="link-item">
                        <a className="link" href="#">
                            <i className="fab fa-instagram link-icon"></i>
                            Instagram
                        </a>
                    </li>
                    <li className="link-item">
                        <a className="link" href="#">
                            <i className="fab fa-twitter link-icon"></i>
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
} export default footer;

