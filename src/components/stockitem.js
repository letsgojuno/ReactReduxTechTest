import React from 'react';
import moment from 'moment';

import {TableRow, TableRowColumn} from 'material-ui/Table';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentClear from 'material-ui/svg-icons/content/clear';

import {formatCurrency} from '../utils/';

const StockItem = ({stock}) => (
  <TableRow>
    <TableRowColumn>{stock.id}</TableRowColumn>
    <TableRowColumn>{stock.name}</TableRowColumn>
    <TableRowColumn>{stock.description}</TableRowColumn>
    <TableRowColumn>{formatCurrency(stock.price)}</TableRowColumn>
    <TableRowColumn>{moment(stock.date).format("MMM Do YYYY")}</TableRowColumn>
    <TableRowColumn style={{textAlign: 'center'}}>
      {stock.taxable ?
        <ActionDone color={'green'}/> :
        <ContentClear color={'red'} />
      }
    </TableRowColumn>
  </TableRow>
);

export default StockItem;
