import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

function Card({ lastCard = false, data }) {

    const classes = cx("inner", {
        lastCard,
    })

    return ( 
        <div className={cx("wrapper")}>
            <div className={classes}>
                <div className={cx("year")}>
                    <span>{data.Year}</span>
                </div>
                <div className={cx("info")}>
                    <h3>
                        <span>{data.Job}</span>
                        <small>{data.Description}</small>
                    </h3>
                    <p>{data.Content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;