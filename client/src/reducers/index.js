import { combineReducers } from 'redux';

//Types
const GET_ERRORS = 'GET_ERRORS';
const GET_PEOPLE = 'GET_PEOPLE';
const DELETE_PERSON = 'DELETE_PERSON';
const GET_PERSON = 'GET_PERSON';
const UPDATE_PERSON = 'UPDATE_PERSON';

// Error reducer
const errorState = {};
function errorReducer(state = errorState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload
    default:
      return state;
  }
}

//People reducer
const getPeopleState = {
  people: [],
  person: {}
}
function peopleReducer(state = getPeopleState, action) {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload
      }
    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter(person => {
          return person._id !== action.payload
        })
      }
    case GET_PERSON:
      return {
        ...state,
        person: state.people.filter(person => {
          return person._id === action.payload
        })
      }
    case UPDATE_PERSON:
      return {
        ...state,
        people: state.people.forEach(person => {
          if (person._id === action.payload.id) {
            person = action.payload;
          }
        })
      }
    default:
      return state
  }
}

export default combineReducers({
  errors: errorReducer,
  people: peopleReducer,
})
