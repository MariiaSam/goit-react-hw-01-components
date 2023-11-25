import PropTypes from 'prop-types';
import { Item, Status, Image, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, Names }) => {
  return (
    <Item>
      <Status isOnline></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
