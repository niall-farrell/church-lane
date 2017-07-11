import React from 'react'
import Day from './Day'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends React.Component {

  render () {
    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.viewer.allDays.edges.map(({node}) =>
            <Day key={node.__id} day={node} />
          )}
        </div>
      </div>
    )
  }

}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    allDays(last: 100, orderBy: createdAt_DESC) @connection(key: "ListPage_allDays", filters: []) {
      edges {
        node {
          ...Day_day
        }
      }
    }
  }
`)
