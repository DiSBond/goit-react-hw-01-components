import propTypes from "prop-types";
import { Item } from "./Statistic.styled";

const StatisticElement = ({ label, percentage }) => {
    return (
        <Item>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
        </Item>
    )
}

StatisticElement.propTypes = {
    label: propTypes.string,
    percentage: propTypes.number,
}

export default StatisticElement