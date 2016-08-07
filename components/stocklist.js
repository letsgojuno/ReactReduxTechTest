import React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import StockItem from './stockitem';

const StockList = ({stocks}) => (
  <Table
    selectable={false}
  >
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Taxable ?</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {stocks.map(stock => <StockItem key={stock.id} stock={stock} /> )}
    </TableBody>
  </Table>
);

const mapStateToProps = (state) => ({
  stocks: state.stocks
});

export default connect(
  mapStateToProps,
  {}
)(StockList);
