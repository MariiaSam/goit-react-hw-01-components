import styled from 'styled-components';

export const ProfileWraper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin-top: 50px;
width: 400px;
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
background-color: rgb(205, 211, 230);
border-radius: 50%;
width: 150px;
margin-top: 20px;
`;

export const UserName = styled.p`
color: black;
font-size: 28px;
margin-bottom: 0px;
font-weight: 700px;
`;

export const UserTag = styled(UserName)`
color: grey;
font-weight: 500px;
`;

export const Location = styled(UserTag)``;

export const StatsList = styled.ul`
background-color: rgb(222, 230, 245);
list-style: none;

display: flex;
align-items: center;
justify-content: center;

gap: 8px;
padding: 0px;
width: 100%;
margin: 0px;

border-top: 1px solid rgb(141, 155, 155);
background-color: rgb(213, 238, 238);

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