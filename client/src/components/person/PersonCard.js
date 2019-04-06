import React, { Component } from 'react'
import { MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { deletePerson } from '../../actions/personActions';

class PersonCard extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteClick = (id) => {
    // console.log(id)
    this.props.deletePerson(id)
  }

  onUpdateClick = (id) => {
    this.props.history.push(`/person/${id}`)
  }

  render() {
    const { name, surname, city, phone, address, id } = this.props;
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
              onClick={this.onUpdateClick.bind(this, id)}>Update</MDBBtn>
            <MDBBtn
              className='mt-2'
              color='danger'
              onClick={this.onDeleteClick.bind(this, id)}>Delete</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}

export default connect(null, { deletePerson })(withRouter(PersonCard));
