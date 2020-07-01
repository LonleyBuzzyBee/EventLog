import React from 'react';
import Event from './Event';
import PropTypes from "prop-types";





function EventList(props){
  let masterEventList = props.masterEventList;
  return (
    <React.Fragment>
      <hr/>
      {masterEventList.map((event, index) =>
        <Event title={event.title}
          location={event.location}
          description={event.description}
          occurrences={event.occurrences}
          key={index}
          />
      )}
  </React.Fragment>
  );
}

EventList.propTypes = {
  eventList: PropTypes.array
};

export default EventList;
