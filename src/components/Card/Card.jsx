import PropTypes from "prop-types";
import {Profile, Description, Avatar, Stats, Name, Tag, Location } from "./Card.styled"

const Card = ({ avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png", username, tag, location, stats }) => {
    return (
        <Profile>
        <Description>
            <Avatar
            src={avatar}
            alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <Stats>
            <li>
            <span className="label">Followers </span>
            <span className="quantity">{stats.followers}</span>
            </li>
            <li>
            <span className="label">Views </span>
            <span className="quantity">{stats.views}</span>
            </li>
            <li>
            <span className="label">Likes </span>
            <span className="quantity">{stats.likes}</span>
            </li>
        </Stats>
        </Profile>
    );
}

export default Card

Card.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.string),
}