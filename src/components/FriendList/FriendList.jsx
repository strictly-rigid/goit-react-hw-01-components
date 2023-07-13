import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';

const FriendList = ({ list }) => {
  return (
    <ul className="friend-list">
      {list.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
