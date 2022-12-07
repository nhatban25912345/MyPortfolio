import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";


const cx = classNames.bind(styles);

function Introduce({ id }) {
    return (  
        <div id={id} className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("information")}>
                    <div className={cx("little-title")}>Welcome to my portfolio website!</div>
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
                    <img className={cx("avatar")} src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/84135939_864269564008747_839758091682578432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HlI5axrjEJkAX9_PWJR&_nc_ht=scontent.fhan2-1.fna&oh=00_AfCJiDy9yru6t7hz6KjETC_t8QysxX11kdvz8oiJL_YrbQ&oe=63A9FFD3" alt="avatar" />
                </div>
            </div>    
        </div>
    );
}

export default Introduce;