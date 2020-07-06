import eventLoggerReducer from '../../reducers/eventlogger-reducer';
import eventListReducer from '../../reducers/eventlist-reducer';

describe('eventLoggerReducer', () => {
  let action;
  const eventData = {
    title: 'a thing happened',
    location: 'a place',
    description: 'this was a cool thing that happened',
    occurrences: 1,
    id: 1
  };
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(eventLoggerReducer({}, { type: null })).toEqual({});
  });

  test('should add a new event data to mastertEventList', () => {
    const { title, location, description, occurrences, id } = eventData;
    action = {
      type: 'ADD_EVENT',
      title: title,
      location: location,
      description: description,
      occurrences: occurrences,
      id: id
    };
    expect(eventListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        location: location,
        description: description,
        occurrences: occurrences,
        id: id
      }
    });
  });

});