import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor'

export const  StatisticsWrap = styled.section`
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

export const Title = styled.h2`
text-transform: uppercase;
text-align: center;
color: #008080;
font-size: 28px;
margin-bottom: 20px;
`;

export const StatList = styled.ul`
list-style: none;
display: flex;
justify-content: center;

gap: 8px;
padding: 0px;
width: 100%;
margin: 0px;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 100%;

background-color: ${() => getRandomHexColor};
`;

export const Label = styled.span`
color: #fff;
font-size: 20px;
`;

export const Percentage = styled(Label)``;

