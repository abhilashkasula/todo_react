import React from 'react';
import Input from './Input';
import Hoverable from './Hoverable';

const DefaultHeader = ({title, onClick}) => (
  <h1 className='header' onClick={onClick}>
    {title}
  </h1>
);

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
    this.props.onUpdate(text);
    this.setState(() => ({editable: false}));
  }

  render() {
    const input = (
      <Input
        value={this.props.title}
        onSubmit={this.updateTitle}
        className='editable-header'
      />
    );

    const DefaultHeaderWithHover = Hoverable(DefaultHeader);

    const defaultHeader = (
      <DefaultHeaderWithHover
        title={this.props.title}
        onClick={this.setEditMode}
        onDelete={this.props.onReset}
      />
    );

    return this.state.editable ? input : defaultHeader;
  }
}

export default Header;
