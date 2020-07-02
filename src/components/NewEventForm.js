import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewEventForm(props){
  
  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({
              title: event.target.title.value, 
              location: event.target.location.value, 
              description: event.target.description.value, 
              id: v4(), 
              occurrences: event.target.occurrences.value
    })
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewEventFormSubmission}
        buttonText="I saw a thing"/>
    </React.Fragment>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
}

export default NewEventForm;

