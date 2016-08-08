import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import serialize from 'form-serialize';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

import {capitalize} from '../utils/index.js';

class AddStockForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
  }

  validateInput(input) {
    const requiredFields = ['name', 'description', 'price', 'date'];

    return requiredFields.reduce((a, x) =>
      !(input.hasOwnProperty(x) && input[x].length) ?
        a.concat(`${capitalize(x)}`) : a, []);
  }

  handleSubmit() {
    let input = serialize(findDOMNode(this.refs.form), {
      hash: true,
      empty: true
    });

    this.onSubmit(this.validateInput(input), input);
  }

  render() {
    const {open, closeRequest} = this.props;
    const dialogActions = [
      <FlatButton label="Cancel" onTouchTap={closeRequest} />,
      <FlatButton label="Ok" onTouchTap={this.handleSubmit.bind(this)}/>
    ];

    return (
      <Dialog
        title="Add a New Stock"
        actions={dialogActions}
        open={open}
        onRequestClose={closeRequest}
      >
        <form ref="form">
          <TextField
            name="name"
            fullWidth={true}
            hintText="Name"/><br />
          <TextField
            name="description"
            fullWidth={true}
            hintText="Description"/><br />
          <TextField
            name="price"
            hintText="Price"/><br />
          <DatePicker
            name="date"
            hintText="Date"
            mode="landscape" /><br />
          <Checkbox
            name="taxable"
            label="Taxable"
            defaultChecked={false} />
        </form>
      </Dialog>
    );
  }
}

export default AddStockForm;
