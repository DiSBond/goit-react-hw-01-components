import propTypes from "prop-types";
import StatisticList from "./StatistcList";
import { Title, SecondTaskBox } from "./Statistic.styled";

function Section({ title, stats }) {
    return (
        <SecondTaskBox>
            {title && <Title>{title}</Title>}
            <StatisticList items={stats}/>
        </SecondTaskBox>
    )
}

export default Section;

Section.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.object),
}