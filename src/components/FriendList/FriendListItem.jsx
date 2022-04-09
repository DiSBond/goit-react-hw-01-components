import PropTypes from "prop-types";
import { Container } from "./FriendList.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Container isOnline={isOnline}>
            <span className={isOnline ? "isOnline" : "isOffline"}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={name}>{name}</p>
        </Container>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}