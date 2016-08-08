import React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import StockItem from './stockitem';

/**
 * StockList is a stateless react component whos only job is
 * to render our table and the stock item components.
 * @param  {Array} options.stocks Stocks list array
 */
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
        <TableHeaderColumn>Date Available</TableHeaderColumn>
        <TableHeaderColumn>Taxable ?</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {stocks.map(stock => <StockItem key={stock.id} stock={stock} /> )}
    </TableBody>
  </Table>
);

// I'm using react-redux connect to map the stock list held in
// the redux store to the props of our stateless component.
const mapStateToProps = (state) => ({
  stocks: state.stocks
});

export default connect(
  mapStateToProps,
  {}
)(StockList);
