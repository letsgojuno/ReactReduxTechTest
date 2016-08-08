import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import AddStockForm from './addStockForm';

import StockList from './stocklist';
import {addStock} from '../state/actions/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      dialog: false,
      snackbar: false,
      snackbar_message: ''
    };

    this.addStock = this.props.onAddStock;
  }

  closeDialog() {
    this.setState({
      dialog: false
    });
  }

  handleFormSubmit(err, input) {
    if (err.length) {
      console.log(err)
      this.setState({
        snackbar_message: `The following fields are required: ${err.join(', ')}`,
        snackbar: true,
      })
    } else {
      this.addStock(input);
      this.setState({
        snackbar: false
      });
      this.closeDialog();
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="ShopKeep Stocks - Demo by Michael Mathews"
            style={{
              textAlign: 'center'
            }}
            onLeftIconButtonTouchTap={() => this.setState({drawer: true})}
          />

          <StockList />

          <AddStockForm
            open={this.state.dialog}
            onSubmit={this.handleFormSubmit.bind(this)}
            closeRequest={this.closeDialog.bind(this)}
            />

          <Drawer
            open={this.state.drawer}
            onRequestChange={(open) => this.setState({
              drawer: open
            })}
          >
            <MenuItem onTouchTap={() => this.setState({
              dialog: true,
              drawer: false
            })}>Add a New Stock</MenuItem>
          </Drawer>

          <Snackbar
            open={this.state.snackbar}
            message={this.state.snackbar_message}
            onRequestClose={() => this.setState({snackbar: false})}
            autoHideDuration={3000}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  { onAddStock: addStock }
)(App);
