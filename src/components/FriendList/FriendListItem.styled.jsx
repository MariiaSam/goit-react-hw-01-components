import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  width: 400px;
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};

`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 80px;
`;

export const Name = styled.p`
  color: #008080;

  font-size: 18px;
  font-weight: bold;
`;
