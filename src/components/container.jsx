import React from 'react'
import MovieCard from './card'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const SearchInput = ({ setSearchTerm, search, fetchAll }) => {

const action = {
        color: 'teal',
        labelPosition: 'left',
        icon: 'search',
        content: 'Search',
        size: 'large',
        'onClick': ()=> fetchAll(search)
    }

  return (<Input fluid action={action} defaultValue='search' onChange={(e) => setSearchTerm(e.target.value)} />)
}

const mappedlist= (lis) => lis.map((data)=> (<MovieCard data={data} id={data.imdbID}  key={data.imdbID} />))

const Container = (props) => {
    console.log('container', props)
const { data } = props
    return (
        <div>
        <Segment  padded='very'>
        <SearchInput {...props} /></Segment>
        <Segment padded='very'>
            <Card.Group itemsPerRow={4}>
              {data.Search && mappedlist(data.Search)}
            </Card.Group>
        </Segment>
        </div>
    )

}



export default Container



