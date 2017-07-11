import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import Bai from './Bai'

class Day extends React.Component {

  render () {
    const cooking = this.props.day.cooking.edges;
    const eating = this.props.day.eating.edges;

    return (
      <div className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.day.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.day.date}&nbsp;

          <h2>Cooking</h2>
          {cooking.map(edge => <Bai bai={edge.node} />)}

          <h2>Eating</h2>
          {eating.map(edge => <Bai bai={edge.node} />)}

          <span className='red f6 pointer dim' onClick={this._handleDelete}>Delete</span>
        </div>
      </div>
    )
  }

  _handleDelete = () => {
  }
}

export default createFragmentContainer(Day, graphql`
  fragment Day_day on Day {
    id
    date
    cooking {
      edges {
        node {
          ...Bai_bai
        }
      }
    }
    eating {
      edges {
        node {
          ...Bai_bai
        }
      }
    }
  }
`)
