import React from 'react';

const Hoverable = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isHovered: false};
      this.handleClick = this.handleClick.bind(this);
      this.setOption = this.setOption.bind(this);
      this.hideOption = this.hideOption.bind(this);
    }

    handleClick() {
      this.props.onDelete(this.props.id);
    }

    setOption() {
      this.setState(() => ({isHovered: true}));
    }

    hideOption() {
      this.setState(() => ({isHovered: false}));
    }

    render() {
      return (
        <div className='hover-container' onMouseEnter={this.setOption} onMouseLeave={this.hideOption}>
          <Component {...this.props} />
          <div onClick={this.handleClick}>
            {this.state.isHovered ? 'X' : ''}
          </div>
        </div>
      );
    }
  };
};

export default Hoverable;
