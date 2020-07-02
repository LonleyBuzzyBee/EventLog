import React from "react";
import PropTypes from "prop-types";

function EventDetail(props) {
  const { event, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Event Details</h1>
      <h3>Title: {event.title}</h3>
      <h3>Location: {event.location}</h3>
      <h3>Description: {event.description}</h3>
      <h3>Views:{event.occurrences}</h3>
      <button onClick={() => onClickingEdit(event.id)}>Edit Event</button>
      <button onClick={() => onClickingDelete(event.id)}>Delete Event</button>
      <hr />
    </React.Fragment>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EventDetail;