import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBAlert } from 'mdbreact';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPerson, updatePerson } from '../../actions/personActions';

class UpdatePerson extends Component {
  state = {
    id: '',
    name: '',
    surname: '',
    city: '',
    address: '',
    phone: '',
    errors: {}
  }

  componentDidMount() {
    this.props.getPerson(this.props.match.params.id);

    //Delete any error from errors
    if (Object.keys(this.props.errors).length > 0) {
      for (let key in this.props.errors) {
        delete this.props.errors[key];
      }
    }

  }

  componentDidUpdate() {
    if (this.state.name === '') {
      this.setState({
        id: this.props.person._id,
        name: this.props.person.name,
        surname: this.props.person.surname,
        city: this.props.person.city,
        address: this.props.person.address,
        phone: this.props.person.phone
      })
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onUpdatePerson = (e) => {
    const personData = {
      id: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      city: this.state.city,
      address: this.state.address,
      phone: this.state.phone
    }

    //Delete any error from errors
    if (Object.keys(this.props.errors).length > 0) {
      for (let key in this.props.errors) {
        delete this.props.errors[key];
      }
    }

    this.props.updatePerson(personData, this.props.history);

    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    const { name, surname, city, address, phone } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Update person data
                </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-2">
                <MDBInput
                  value={name}
                  label="Name"
                  group
                  type="text"
                  name='name'
                  id="name"
                  onChange={this.onChange} />
                {errors.name ? <MDBAlert color="danger">{errors.name}</MDBAlert> : null}
                <MDBInput
                  value={surname}
                  label="Surname"
                  group
                  type="text"
                  name='surname'
                  id="surname"
                  onChange={this.onChange} />
                {errors.surname ? <MDBAlert color="danger">{errors.surname}</MDBAlert> : null}
                <MDBInput
                  value={city}
                  label="City"
                  group
                  type="text"
                  id="city"
                  name='city'
                  onChange={this.onChange} />
                {errors.city ? <MDBAlert color="danger">{errors.city}</MDBAlert> : null}
                <MDBInput
                  value={address}
                  label="Address"
                  group
                  type="text"
                  id="address"
                  name='address'
                  onChange={this.onChange} />
                {errors.address ? <MDBAlert color="danger">{errors.address}</MDBAlert> : null}
                <MDBInput
                  value={phone}
                  label="Phone"
                  group
                  type="text"
                  id="phone"
                  name='phone'
                  onChange={this.onChange} />
                {errors.phone ? <MDBAlert color="danger">{errors.phone}</MDBAlert> : null}
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    type="button"
                    className="btn-block z-depth-2"
                    onClick={this.onUpdatePerson}
                    color='secondary'
                  >
                    Update Person
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
  person: state.people.person[0],
  errors: state.errors
})

export default connect(mapStateToProps, { getPerson, updatePerson })(withRouter(UpdatePerson));
