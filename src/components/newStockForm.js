import React, {Component, PropTypes} from 'react';
import debounce from 'lodash.debounce';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

class NewStockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.debouncedInput = debounce(this.handleTextChange, 200)
  }

  handleTextChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleDataChange(type, data) {
    this.setState({
      [type]: data
    })
  }

  render() {
    const {handleSubmit, open, closeRequest} = this.props;
    const dialogActions = [
      <FlatButton label="Cancel" onTouchTap={closeRequest} />,
      <FlatButton label="Ok" onTouchTap={() => handleSubmit(this.state) }/>,
    ];

    return (
      <Dialog
        title="Add New Stock"
        actions={dialogActions}
        open={open}
        onRequestClose={closeRequest}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            onChange={(e, v) => this.debouncedInput(e.target.name, v)}
            hintText="Name"/><br />
          <TextField
            name="description"
            onChange={(e, v) => this.debouncedInput(e.target.name, v)}
            fullWidth={true}
            hintText="Description"/><br />
          <TextField
            name="price"
            onChange={(e, v) => this.debouncedInput(e.target.name, v)}
            hintText="Price"/><br />
          <DatePicker
            name="date"
            onChange={(e, date) => this.handleDataChange('date', date.toString())}
            hintText="Date"
            mode="landscape" /><br />
          <Checkbox
            name="taxable"
            onCheck={(ev, checked) => this.handleDataChange('taxable', checked)}
            label="Taxable"
            defaultChecked={false} />
        </form>
      </Dialog>
    );
  }
}

export default NewStockForm;
