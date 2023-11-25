import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  TableHeadItem,
  TableBody,
  TableBodyTr,
  TableBodyItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableBodyTr key={id}>
              <TableBodyItem>{type}</TableBodyItem>
              <TableBodyItem>{amount}</TableBodyItem>
              <TableBodyItem>{currency}</TableBodyItem>
            </TableBodyTr>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
