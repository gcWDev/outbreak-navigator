import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={`mt-5 ${styles.footerContainer}`}>
        <div className="container ">
            <div className="row">
                <div className="col-4">
                    <h5>Section 1</h5>
                    <ul>
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Section 2</h5>
                    <ul>
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Section 3</h5>
                    <ul>
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
