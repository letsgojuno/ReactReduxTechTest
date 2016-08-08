import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import serialize from 'form-serialize';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

import {capitalize} from '../utils/';

class NewStockForm extends Component {
  constructor(props) {
    super(props);
  }

  validateInput(input) {
    const requiredFields = ['name', 'description', 'price', 'date'];

    return requiredFields.reduce((a, x) =>
      !(input.hasOwnProperty(x) && input[x].length) ?
        a.concat({[x]: `${capitalize(x)} is a required field` }) : a, []);
  }

  render() {
    const {handleSubmit, open, closeRequest} = this.props;
    const dialogActions = [
      <FlatButton label="Cancel" onTouchTap={closeRequest} />,
      <FlatButton label="Ok" onTouchTap={() => {
        let input = serialize(findDOMNode(this.refs.form), {
          hash: true,
          empty: true
        });

        let errors = this.validateInput(input)
        if (!errors.length) {
          handleSubmit(input);
        } else {
          console.log(errors);
        }
      }}/>
    ];

    return (
      <Dialog
        title="Add New Stock"
        actions={dialogActions}
        open={open}
        onRequestClose={closeRequest}
      >
        <form ref="form" onSubmit={handleSubmit}>
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

export default NewStockForm;
