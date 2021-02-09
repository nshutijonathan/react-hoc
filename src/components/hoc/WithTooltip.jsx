import React from "react";
const withTooltip = (Component) => {
  return class WithTooltip extends React.Component {
    state = {
      showToolTip: false,
    };
    MouseOver = () => this.setState({ showToolTip: true });
    MouseOut = () => this.setState({ showToolTip: false });
    render() {
      return (
        <div onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
          <Component {...this.props} showToolTip={this.state.showToolTip} />
        </div>
      );
    }
  };
};
export default withTooltip;
