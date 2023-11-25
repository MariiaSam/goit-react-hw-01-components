import styled from 'styled-components';

export const ProfileWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 50px;
  width: 400px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 150px;
  margin-top: 20px;

  background-color: rgb(123, 196, 196);
  border-radius: 50%;
`;

export const UserName = styled.p`
  color: #008080;
  font-size: 28px;
  margin-bottom: 0px;
  font-weight: bold;
`;

export const UserTag = styled(UserName)`
  color: #6daeae;
  font-weight: 500px;
`;

export const Location = styled(UserTag)``;

export const StatsList = styled.ul`
  background-color: #4d9f98;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 0px;
  width: 100%;
  margin: 0px;

  border-top: 1px solid rgb(141, 155, 155);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin: 20px 0px;
`;

export const Label = styled.span`
  margin: 0px 5px;
  font-size: 20px;
  font-weight: 400;
`;

export const Quantity = styled(Label)`
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
`;
