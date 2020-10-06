import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "./../components/Message"
// import { changeMessage } from "../actions";

class MessageContainer extends Component {
  render() {      
      var { message } = this.props;
    return (
        <Message 
          message={message} 
          />
    );
  }
}

MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
