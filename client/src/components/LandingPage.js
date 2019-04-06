import React, { Component } from 'react'
import { MDBContainer, MDBRow } from 'mdbreact';

import { connect } from 'react-redux';
import { getPeople } from '../actions/personActions';

import PersonCard from './person/PersonCard';

class LandingPage extends Component {

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    let renderPerson = null;
    const { people } = this.props.people;
    // Render person card
    if (people) {
      renderPerson = people.map(person => {
        return <PersonCard
          key={person._id}
          id={person._id}
          name={person.name}
          surname={person.surname}
          city={person.city}
          address={person.address}
          phone={person.phone} />
      })
    }
    return (
      <div>
        <MDBContainer className="member-container">
          <MDBRow>
            {renderPerson}
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  people: state.people
})

export default connect(mapStateToProps, { getPeople })(LandingPage);
