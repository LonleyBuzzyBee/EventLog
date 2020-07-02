import React from "react";
import PropTypes from "prop-types";

function EventDetail(props) {
  const { event } = props;
  return (
    <React.Fragment>
      <h1>Event Details</h1>
      <h3>Title: {event.title}</h3>
      <h3>Location: {event.location}</h3>
      <h3>Description: {event.description}</h3>
      <h3>Views:{event.occurrences}</h3>
      <hr />
    </React.Fragment>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object
};

export default EventDetail;