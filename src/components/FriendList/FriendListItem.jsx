import PropTypes from 'prop-types';
import {
  FriendItem,
  StatusOff,
  StatusOn,
  FriendAvatar,
} from './FriendListItem.styled';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <FriendItem>
      {isOnline ? <StatusOff></StatusOff> : <StatusOn></StatusOn>}
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
