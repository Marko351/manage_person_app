import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBAlert } from 'mdbreact';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPerson } from '../../actions/personActions';

class CreatePerson extends Component {
  state = {
    name: '',
    surname: '',
    city: '',
    address: '',
    phone: '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onCreatePerson = (e) => {
    const newPerson = {
      name: this.state.name,
      surname: this.state.surname,
      city: this.state.city,
      address: this.state.address,
      phone: this.state.phone
    }

    this.props.createPerson(newPerson, this.props.history);

    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Create New Person
                </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-2">
                <MDBInput
                  label="Name"
                  group
                  type="text"
                  name='name'
                  id="name"
                  onChange={this.onChange} />
                {errors.name ? <MDBAlert color="danger">{errors.name}</MDBAlert> : null}
                <MDBInput
                  label="Surname"
                  group
                  type="text"
                  name='surname'
                  id="surname"
                  onChange={this.onChange} />
                {errors.surname ? <MDBAlert color="danger">{errors.surname}</MDBAlert> : null}
                <MDBInput
                  label="City"
                  group
                  type="text"
                  id="city"
                  name='city'
                  onChange={this.onChange} />
                {errors.city ? <MDBAlert color="danger">{errors.city}</MDBAlert> : null}
                <MDBInput
                  label="Address"
                  group
                  type="text"
                  id="address"
                  name='address'
                  onChange={this.onChange} />
                {errors.address ? <MDBAlert color="danger">{errors.address}</MDBAlert> : null}
                <MDBInput
                  label="Phone"
                  group
                  type="text"
                  id="phone"
                  name='phone'
                  onChange={this.onChange} />
                {errors.phone ? <MDBAlert color="danger">{errors.phone}</MDBAlert> : null}
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    color="primary"
                    type="button"
                    className="btn-block z-depth-2"
                    onClick={this.onCreatePerson}
                  >
                    Create Person
                </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, { createPerson })(withRouter(CreatePerson));
