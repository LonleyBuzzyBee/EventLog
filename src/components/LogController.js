import React from 'react';
import EventList from "./EventList";
import NewEventForm from "./NewEventForm";
import EventDetail from "./EventDetail";
import EditEventForm from './EditEventForm';
import { connect } from 'react-redux';


class LogController extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterEventList: [],
      selectedEvent: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingEventInList = (editedEvent) => {
    const editedMasterEventList = this.state.masterEventList
          .filter(event => event.id !== this.state.selectedEvent.id)
          .concat(editedEvent);
    this.setState({
      masterEventList: editedMasterEventList,
      editing: false,
      selectedEvent: null
    });
  }

  handleChangingSelectedEvent = (id) => {
    const selectedEvent = this.state.masterEventList.filter(event => event.id === id)[0];
    this.setState({selectedEvent: selectedEvent});
  }
    //  newEvent = {id, descript, title, views, location}
  handleAddingNewEventToList = (newEvent) => {
    const newMasterEventList = this.state.masterEventList.concat(newEvent);
    this.setState({ masterEventList: newMasterEventList, formVisibleOnPage: false });
  }

  // handleAddingNewEventToList = (newEvent) => {
  //   const { dispatch } = this.props;
  //   const { title, location, description, occurrences, id } = newEvent;
  //   const action = {
  //     type: 'ADD_EVENT',
  //     title: title,
  //     location: location,
  //     description: description,
  //     occurrences: occurrences,
  //     id: id
  //   }
  //   dispatch(action);
  //   this.setState({formVisibleOnPage: false});
  // }

  handleDeletingEvent = (id) => {
    const newMasterEventList = this.state.masterEventList.filter(event => event.id !== id);
    this.setState({masterEventList: newMasterEventList, selectedEvent: null});
  }

  ToggleForm = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEvent: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    if (this.state.editing){
      return(
        <React.Fragment>
        <EditEventForm event = {this.state.selectedEvent} onEditEvent={this.handleEditingEventInList}/>
        <button onClick={this.ToggleForm}>Return to Event List</button>
      </React.Fragment>
      )
    }
    else if (this.state.selectedEvent != null){
      return(
        <React.Fragment>
          <EventDetail event={this.state.selectedEvent} onClickingDelete={this.handleDeletingEvent} onClickingEdit={this.handleEditClick} />
          <button onClick={this.ToggleForm}>Return to Event List</button>
        </React.Fragment>
      )
    }
    else if(this.state.formVisibleOnPage)
      {
      return(
        <React.Fragment>
          <NewEventForm onNewEventCreation = {this.handleAddingNewEventToList}/>
          <button onClick={this.ToggleForm}>Back to List</button>
        </React.Fragment>
        )
      }
    else{
      return(  
        <React.Fragment>
          <EventList masterEventList={this.state.masterEventList} onEventSelection={this.handleChangingSelectedEvent}/>
          <button onClick={this.ToggleForm}>New Event</button>          
        </React.Fragment>
      )
    }
  }
}
LogController = connect()(LogController);


export default LogController;


//  {currentlyVisibleState}
//   <button onClick={this.listViewClick}>{buttonText}</button>