import React from "react";
import ReactDOM from "react-dom";
import {
    Modal
} from "./styled";
import PropTypes from "prop-types";
import "./Dialog.css";


class DialogModal extends React.Component {

    render() {
        return ReactDOM.createPortal (
            <Modal>
                  <div className="dialog-container">
                    <div className="dialog">
                      <form className="dialog-form" onSubmit={this.props.launchChat}>
                        <label className="username-label" htmlFor="username">
                          What is your name?
                          <span onClick={this.props.handleBox} className="close">&times;</span>
                        </label>
                        <input
                          id="username"
                          className="username-input"
                          autoFocus
                          type="text"
                          name="userId"
                          value={this.props.username}
                          onChange={this.props.handleInput}
                        />
                        <button type="submit" className="submit-btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </Modal>,
        document.querySelector("#modal")
    )
  };
};

DialogModal.propTypes = {
    username: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    launchChat: PropTypes.func.isRequired
  };

export default DialogModal;