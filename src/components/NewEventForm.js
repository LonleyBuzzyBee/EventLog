import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewEventForm(props){
  
  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({title: event.target.title.value, location: event.target.location.value, description: event.target.description.value, id: v4(), occurrences: 1})
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewEventFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='title' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='description'
          placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
}

export default NewEventForm;

