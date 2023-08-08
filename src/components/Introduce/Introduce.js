import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import avatar from "../assets/images/avatar.jpg"

const cx = classNames.bind(styles);

function Introduce({ id }) {
    return (  
        <div id={id} className={cx("wrapper")}>
            <div className={cx("container")}>
            <div className={cx("little-title")}>Welcome to my portfolio website!</div>
                <div className={cx("information")}>
                    <h1 className={cx("greeting")}>
                        <span className={cx("default-greeting")}>Hey folks, I'm</span>
                        <div className={cx("animated-info")}>
                            <span className={cx("animated-item")}>Minh Nhat</span>
                            <span className={cx("animated-item")}>Coder</span>
                            <span className={cx("animated-item")}>Front-end Developer</span>
                        </div>
                    </h1>
                    <div className={cx("content")}>
                        Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.
                    </div>
                    <div className={cx("contact")}>
                        <a href="/" className={cx("btn-contact")}>Contact Me</a>
                    </div>  
                </div>
                <div className={cx("avatar-container")}>
                    <img className={cx("avatar")} src={avatar} alt="avatar" />
                </div>
            </div>    
        </div>
    );
}

export default Introduce;