// Thirdparty dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';

// Local components
import AddStockForm from './addStockForm';
import StockList from './stocklist';

// State dependencies
import {addStock} from '../state/actions/index.js';

/**
 * Main app component.
 * Container for the main UI elements for our app.
 * - App bar
 * - Drawer
 * - Stock List
 * - Add stock Dialog
 * - Snackbar notification area
 *
 * I'm storing the UI state in this component as
 * apposed to the redux store. I believe not
 * everything needs to go into the store. Some
 * UI state is local and is easier handled by
 * react setState;
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      dialog: false,
      snackbar: false,
      snackbar_message: ''
    };
  }

  closeDialog() {
    this.setState({
      dialog: false
    });
  }

  /**
   * New stock form handler.
   * Here I check for any validation errors and show
   * the snackbar if any exist. Otherwise I can trigger
   * the redux addStock, which will dispatch an action
   * to our store with the new stock to add.
   * We also reset our UI closing the snackbar and dialog.
   *
   * @param  {Array} err   An array of errors passed from
   * the new stock form component.
   * @param  {Object} input The serialized form data from
   * the new stock form component.
   */
  handleFormSubmit(err, input) {
    if (err.length) {
      this.setState({
        snackbar_message: `The following fields are required: ${err.join(', ')}`,
        snackbar: true,
      })
    } else {
      this.props.addStock(input);
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
            style={{textAlign: 'center'}}
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
            })}>
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

// Here I'm using the react-redux connect component to map
// state from the redux store to props in our app component.
// The connect component is a HOC that uses context in react
// to make the store available to any wrapped components.
// Saving the need to pass the store ourselves.
const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  { addStock }
)(App);
