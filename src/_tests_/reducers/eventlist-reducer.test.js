
import eventListReducer from '../../reducers/eventlist-reducer';





describe('eventListReducer', () => {
  let action;
  
  const eventData = {
      title: 'a thing happened',
      location: 'a place',
      description: 'this was a cool thing that happened',
      occurrences: 1,
      id: 1,
  };
  const currentState = {
    
      1: {
        title: 'a thing woo happened',
        location: 'a place',
        description: 'this was a cool thing that happened',
        occurrences: 1,
        id: 1,
      },
      2: {
        title: 'a thing yay happened',
        location: 'a place',
        description: 'this was a cool thing that happened',
        occurrences: 2,
        id: 2,
      },

    };
  
    test('should add a new event data to mastertEventList', () => {
      const { title, location, description, occurrences, id } = eventData;
      action = {
        type: 'ADD_EVENT',
        title: title,
        location: location,
        description: description,
        occurrences: occurrences,
        id: id,
      };
      
      expect(eventListReducer({}, action)).toEqual({
        [id]: {
          title: title,
          location: location,
          description: description,
          occurrences: occurrences,
          id: id,
        },
      });
    });
      
      test('Should successfully delete a event', () => {
        action = {
          type: 'DELETE_EVENT',
          id: 1,
        };
        expect(eventListReducer(currentState, action)).toEqual({
          2: {
            title: 'a thing yay happened',
            location: 'a place',
            description: 'this was a cool thing that happened',
            occurrences: 2,
            id: 2,
          },
        });
      });
      
      test('Should return default state if there is no action type passed into the reducer', () => {
        expect(eventListReducer({}, { type: null })).toEqual({});
      });
    });