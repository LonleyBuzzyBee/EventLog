import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEventForm(props) {
  const {event} = props;

  function handleEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent({
      title: event.target.title.value,
      location: event.target.location.value,
      occurrences: event.target.occurrences.value,
      description: event.target.description.value,
      id: event.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditEventFormSubmission}
        buttonText="Update Event" />
    </React.Fragment>
  ); 
}

EditEventForm.propTypes = {
  onEditEvent: PropTypes.func
}

export default EditEventForm;