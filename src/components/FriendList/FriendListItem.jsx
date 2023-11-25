import PropTypes from 'prop-types';
import { Item, Status, Image, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <Item >
      <Status  $isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Використання символу $ перед ім'ям властивості ($isOnline) є конвенцією, яка часто використовується в styled-components. Цей символ допомагає відрізняти властивості, призначені для стилізації, від звичайних властивостей React, які передаються до базового DOM-елементу.


