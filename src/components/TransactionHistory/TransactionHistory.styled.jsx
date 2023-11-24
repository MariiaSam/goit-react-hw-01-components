import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin-top: 50px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background-color: white;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;

  background-color: rgb(131, 203, 197);
  border-radius: 10px;
`;

export const TableRow = styled.tr`
  text-align: center;
`;

export const TableHeadItem = styled.th`
  color: white;

  font-size: 24px;
  font-weight: 400;
  border: 2px solid rgb(3, 52, 48);
  padding: 3px 2px;
`;

export const TableBody = styled.tbody`
  font-size: 18px;
  text-align: center;
  text-shadow: 1px 1px 1px #fff;
  padding: 8px 0;
`;

export const TableBodyTr = styled.tr`
  background-color: rgb(139, 187, 183);
`;

export const TableBodyItem = styled.td`
  text-shadow: 1px 1px 1px #fff;
  padding: 8px 0;
`;
