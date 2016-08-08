import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import serialize from 'form-serialize';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

import {capitalize} from '../utils/index.js';

/**
 * AddStockForm is a container component that hold the dialog
 * that is presented to the user when they want to add a new stock.
 * I'm using react material UI to render the dialog and the various inputs.
 */
class AddStockForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
  }

  /**
   * A quick and dirty validation method.
   * Has an array of required fields which it reduces down
   * depending on wether they exist in the input or not.
   * The resulting array is either empty, meaning no errors
   * ...or it is a list of any fields that have been left out.
   * @param  {Object} input Input object, in this case
   * the serialized input from the form.
   * @return {Array}       An empty array or an array of validation
   * errors.
   */
  validateInput(input) {
    const requiredFields = ['name', 'description', 'price', 'date'];

    return requiredFields.reduce((a, x) =>
      !(input.hasOwnProperty(x) && input[x].length) ?
        a.concat(`${capitalize(x)}`) : a, []);
  }

  /**
   * When the form submits I serialize the html form using the
   * ref to the form element setup in the render method.
   * The user input is then passed to the `validateInput method`
   * then onto the parent components onSubmit handler.
   * @return {[type]} [description]
   */
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
