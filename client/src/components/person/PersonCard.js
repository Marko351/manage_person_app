import React from 'react'
import { MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePerson } from '../../actions/personActions';

const PersonCard = (props) => {

  const onDeleteClick = (id) => {
    props.deletePerson(id)
  }

  const onUpdateClick = (id) => {
    props.history.push(`/person/${id}`)
  }

  const { name, surname, city, phone, address, id } = props;
  return (
    <MDBCol md='6' sm='12' className='mt-4'>
      <MDBCard>
        <MDBCardBody>
          <h4 className="font-weight-bold mb-3">{name + ' ' + surname}</h4>
          <p className="font-weight-bold">City: <span className='red-text'>{city}</span></p>
          <p className="font-weight-bold">Address: <span className='red-text'>{address}</span></p>
          <p className="font-weight-bold">Phone: <span className='red-text'>{phone}</span></p>
          <MDBBtn
            className='mt-2'
            color='secondary'
            onClick={onUpdateClick.bind(this, id)}>Update</MDBBtn>
          <MDBBtn
            className='mt-2'
            color='danger'
            onClick={onDeleteClick.bind(this, id)}>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default connect(null, { deletePerson })(withRouter(PersonCard));
