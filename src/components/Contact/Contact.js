import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const cx = classNames.bind(styles);

function Contact({ id }) {
    return (  
        <div id={id} className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("map-container")}>
                    <iframe
                        className={cx("gg-map")}  
                        title="gg-map"
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8195485613837!2d105.87513917402666!3d20.999869388772606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeaa17c35b81%3A0x79d8becf2f06f8dc!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaW5oIGRvYW5oIHbDoCBDw7RuZyBuZ2jhu4cgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1691624349729!5m2!1svi!2s"}
                    />
                    <div className={cx("contact-box")}>
                        <div className={cx("contact-box-inner")}>
                            <div className={cx("contact-info-item")}>
                                <h3 className={cx("contact-info-title")}>Say hello</h3>
                                <p className={cx("contact-info-phonenumber")}>+84 967381833</p>
                                <p><a className={cx("email-contact")} href="/">hoangnhat529@gmail.com</a></p>
                            </div>

                            <ul className={cx("social-links")}>
                                <li><a className={cx("contact-icon")} href="https://www.facebook.com/minhnhat.hoang.7311"><AiOutlineFacebook /></a></li>
                                <li><a className={cx("contact-icon")} href="https://www.linkedin.com/in/hoang-minh-nhat-377204258/"><AiOutlineLinkedin /></a></li>
                                <li><a className={cx("contact-icon")} href="https://www.instagram.com/shinha259"><BsInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx("right-content-wrapper")}>
                    <h1 className={cx("right-content-title")}>Interested to work together?<br/><span>Let's talk</span></h1>
                    <form className={cx("form-wrapper")}>
                            <input className={cx("name")} type="text" placeholder="Your name"/>
                            <input className={cx("email")} type="email" placeholder="Your email"/>
                            <textarea className={cx("message")} placeholder="Message"/>
                            <a className={cx("send-btn")} href="/">Send</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;