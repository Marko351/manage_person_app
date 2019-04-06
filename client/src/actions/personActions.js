import axios from 'axios';

//Types
const GET_ERRORS = 'GET_ERRORS';
const GET_PEOPLE = 'GET_PEOPLE';
const DELETE_PERSON = 'DELETE_PERSON';
const GET_PERSON = 'GET_PERSON';
const UPDATE_PERSON = 'UPDATE_PERSON';

// Create Person
export const createPerson = (personData, history) => {
  return (dispatch) => {
    axios
      .post('/api/persons/create', personData)
      .then(res => history.push('/'))
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      })
  }
}

//Update person
export const updatePerson = (personData, history) => {
  return (dispatch) => {
    axios
      .put(`/api/persons/${personData.id}`, personData)
      .then(res => {
        dispatch({
          type: UPDATE_PERSON,
          payload: personData
        })

        return history.push('/')
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      })
  }
}

//Get all people
export const getPeople = () => {
  return dispatch => {
    axios
      .get('/api/persons/')
      .then(res => {
        dispatch({
          type: GET_PEOPLE,
          payload: res.data
        })
      })
      .catch(err => console.log(err));

  }
}

//Get Person
export const getPerson = (id) => {
  return dispatch => {
    // console.log(id)
    axios
      .get(`/api/persons/${id}`)
      .then(res => {
        dispatch({
          type: GET_PERSON,
          payload: id
        })
      })
      .catch(err => console.log(err));
  }
}

//Delete person
export const deletePerson = (id) => {
  return dispatch => {
    console.log(id)
    axios
      .delete(`/api/persons/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_PERSON,
          payload: id
        })
      })
      .catch(err => console.log(err));
  }
}