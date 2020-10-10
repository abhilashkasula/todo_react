import React from 'react';
import Input from './Input';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editable: false};
    this.setEditMode = this.setEditMode.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  setEditMode() {
    this.setState(() => ({editable: true}));
  }

  updateTitle(text) {
    this.props.onSubmit(text);
    this.setState(() => ({editable: false}));
  }

  render() {
    if (this.state.editable) {
      return (
        <Input
          value={this.props.title}
          onSubmit={this.updateTitle}
          className="header"
        />
      );
    }
    return (
      <h1 className="header" onClick={this.setEditMode}>
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
