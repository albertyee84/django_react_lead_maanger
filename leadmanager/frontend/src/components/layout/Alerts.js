import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.name.join()}`);
      if (error.msg.message)
        alert.error(`message: ${error.msg.message.join()}`);
    }
  }

  render() {
    return <Fragment />;
  }
}

const msp = state => ({
  error: state.errors
});

export default connect(msp)(withAlert()(Alerts));
