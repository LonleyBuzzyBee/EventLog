import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type="text"
          name="title"
          placeholder="Title" />
        <input
          type="text"
          name="location"
          placeholder="Location" />
        <input
          type="number"
          name="occurrences"
          placeholder="Viewings" />
        <textarea
          name="description"
          placeholder="Event Description" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;