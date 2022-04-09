import PropTypes from "prop-types";
import FriendLisitem from "./FriendListItem"
import { List } from "./FriendList.styled";

const FriendList = ({ items }) => {
    return (
        <List>
            {items.map(item => (
                <li key={item.id}>
                    <FriendLisitem
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                </li>
            ))}
        </List>
    )
}

export default FriendList

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}