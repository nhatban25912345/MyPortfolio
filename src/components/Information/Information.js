import styles from "./Information.module.scss";
import classNames from "classnames/bind";
import Card from "./Card";
import { experiences, educations} from "./milestone-data";
console.log(experiences);

const cx = classNames.bind(styles);

function Information({ id }) {
    return ( 
        <div id={id} className={cx("wrapper")}>
            <div className={cx("experiences")}>
                <h2 className={cx("title")}>Experiences</h2>
                {experiences.map((card,index) => (
                    <Card key={index} data={card} lastCard={card.LastCard}/>
                ))}
            </div>
            <div className={cx("educations")}>
                <h2 className={cx("title")}>Educations</h2>
                {educations.map((card,index) => (
                    <Card key={index} data={card} lastCard={card.LastCard}/>
                ))}
            </div>
        </div>
     );
}

export default Information;