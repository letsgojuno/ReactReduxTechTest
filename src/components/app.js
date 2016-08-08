import React, {Component} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';


import NewStockForm from './newStockForm';
import StockList from './stocklist';

import {addStock} from '../state/actions/';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      dialog: false
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="ShopKeep Stocks"
            style={{
              textAlign: 'center'
            }}
            onLeftIconButtonTouchTap={() => this.setState({drawer: true})}
          />

          <StockList />

          <NewStockForm
            closeRequest={() => this.setState({
              dialog: false
            })}
            open={this.state.dialog}
            />

          <Drawer
            docked={false}
            open={this.state.drawer}
            onRequestChange={(open) => this.setState({
              drawer: open
            })}
          >
            <MenuItem onTouchTap={() => this.setState({
              dialog: true,
              drawer: false
            })}>Add New Stock</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.app,
});

export default connect(
  mapStateToProps,
  { onAddStock: addStock }
)(App);
