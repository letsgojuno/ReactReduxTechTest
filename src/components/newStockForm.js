import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

class NewStockForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields: {name, description, price, date, taxable}, handleSubmit, open, closeRequest} = this.props;

    const dialogActions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={closeRequest}
      />,

      <FlatButton label="Ok" primary={true} onTouchTap={() =>
          handleSubmit()}
      />,
    ];

    return (
      <Dialog
        title="Add New Stock"
        actions={dialogActions}
        modal={false}
        open={open}
        onRequestClose={closeRequest}
      >
        <form onSubmit={handleSubmit}>
          <TextField name="name" hintText="Name"/><br />
          <TextField name="description" hintText="Description"/><br />
          <TextField name="price" hintText="Price"/><br />
          <DatePicker name="date" hintText="Date" mode="landscape" />
          <Checkbox
            name="taxable"
            label="Taxable"
            defaultChecked={false}
          />
        </form>
      </Dialog>
    );
  }
}


export default reduxForm({
  form: 'form',
  fields: ['name', 'description', 'price', 'date', 'taxable']
})(NewStockForm)
