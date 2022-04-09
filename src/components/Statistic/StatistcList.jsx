import propTypes from "prop-types";
import StatisticElement from "./StatisticElement";
import { StatisticItem, List  } from "./Statistic.styled";

const StatisticList = ({ items }) => {
    return (
        <List>
            {items.map(item => (
                <StatisticItem key={item.id}>
                    <StatisticElement
                        label={item.label}
                        percentage={item.percentage}
                    />
                </StatisticItem> 
            ))}
          
        </List>
    )
}

StatisticList.propTypes = {
    items: propTypes.arrayOf(propTypes.object),
}

export default StatisticList
