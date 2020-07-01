import React from 'react';
import EventList from "./EventList";
import NewEventForm from "./NewEventForm";


class LogController extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      formVisibleOnPage : false,
      masterEventList : []
    }
  }
                                //newEvent = {id, descript, title, views, location}
  handleAddingNewEventToList = (newEvent) => {
    const newMasterEventList = this.state.masterEventList.concat(newEvent);
    this.setState({ masterEventList: newMasterEventList, formVisibleOnPage: false });
  }

  ToggleForm = () => {
    if(this.state.formVisibleOnPage)
    {
      this.setState({ formVisibleOnPage: false });
    }
    else
    {
      this.setState({ formVisibleOnPage: true });
    }
  }

  render(){
    if(this.state.formVisibleOnPage)
      {
      return(
        <React.Fragment>
          <NewEventForm onNewEventCreation = {this.handleAddingNewEventToList}/>
          <button onClick={this.ToggleForm}>Back to List</button>
        </React.Fragment>
        )
      }
    else {
      return(  
        <React.Fragment>
          <EventList masterEventList={this.state.masterEventList}/>
          <button onClick={this.ToggleForm}>New Event</button>          
        </React.Fragment>
      )
    }
  }
}

export default LogController;


//  {currentlyVisibleState}
//   <button onClick={this.listViewClick}>{buttonText}</button>