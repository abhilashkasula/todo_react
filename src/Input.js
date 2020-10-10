import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.value || ''};
    this.handleInput = (e) => this.handleInputValue(e.target.value);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputValue(text) {
    this.setState(() => ({text}));
  }

  onSubmit(event) {
    event.preventDefault();

    if (!this.state.text.trim()) {
      return;
    }

    this.props.onSubmit(this.state.text);
    this.setState(() => ({text: ''}));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleInput}
          className={this.props.className}
        />
      </form>
    );
  }
}

export default Input;
