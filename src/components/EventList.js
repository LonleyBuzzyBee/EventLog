import React from 'react';
import Event from './Event';
import PropTypes from "prop-types";


function EventList(props){
  let masterEventList = props.masterEventList;
  return (
    <React.Fragment>
      <hr/>
      {masterEventList.map((event, index) =>
        <Event 
          whenEventClicked = { props.onEventSelection }
          title={event.title}
          location={event.location}
          description={event.description}
          occurrences={event.occurrences}
          id={event.id}
          key={index}
          />
      )}
  </React.Fragment>
  );
}

EventList.propTypes = {
  eventList: PropTypes.array,
  onEventSelection: PropTypes.func
};

export default EventList;
