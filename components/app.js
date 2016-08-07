import React, {Component} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

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

  handleInputChange (ev) {
    console.log(ev.target.value, this);
  }
  handleCheckboxChange(ev, checked) {
    console.log(checked);
  }

  render() {
    const {onAddStock} = this.props;

    const dialogActions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={() =>
        this.setState({dialog: false})}
      />,

      <FlatButton label="Ok" primary={true} onTouchTap={() =>
        onAddStock({
          name:'foo',
          description: 'desx',
          price: 100,
          taxable: true,
          date: 'asdf'
        })}
      />,
    ];

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

          <Dialog
            title="Add New Stock"
            actions={dialogActions}
            modal={false}
            open={this.state.dialog}
            onRequestClose={() => this.setState({
              dialog: false
            })}
          >
            <div>
              <form>
              <TextField onChange={(ev) => this.handleInputChange(ev)} hintText="Name"/><br />
              <TextField onChange={(ev) => this.handleInputChange(ev)} hintText="Description"/><br />
              <TextField onChange={(ev) => this.handleInputChange(ev)} hintText="Price"/><br />
              <DatePicker onChange={(ev) => this.handleInputChange(ev)} hintText="Date" mode="landscape" />
              <Checkbox
                onCheck={(ev) => this.handleCheckboxChange(ev)}
                label="Taxable"
                defaultChecked={false}
              />
              </form>
            </div>
          </Dialog>

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
