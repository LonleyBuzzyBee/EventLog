import React from "react";
import PropTypes from "prop-types";


function Event(props){
  
  return (
    <React.Fragment>
      <div onClick={() => props.whenEventClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>Location: <em>{props.location}</em></p>
        <p>Description: <em>{props.description}</em></p>    
        <p>Viewings: {props.occurrences}</p> 
        <hr />
      </div>
    </React.Fragment>
  );
}
          
//<button onClick={this.ToggleForm}>Back to List</button>

Event.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  occurrences: PropTypes.number,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;

