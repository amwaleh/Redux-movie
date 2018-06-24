import React from 'react'
import MovieListPage ,{ MoviePageCard }from './card'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const SearchInput = ({ setSearchTerm, search, fetchAll}) => {

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

const mappedlist= (lis, fetchOne) =>(
    <Card.Group itemsPerRow={4}>
    {lis.map((data)=> (<MovieListPage data={data} key={data.imdbID} onClick={fetchOne}/>))}
    </Card.Group>
    )

// const singleView = (data) =>

const Container = (props) => {
    console.log('container', props)
const { data, multiView } = props
const showMultiView = data && !data.Error && multiView
console.log('showMultiView',showMultiView, data)
    return (
        <div>
        <Segment  padded='very'>
        <SearchInput {...props} /></Segment>
        <Segment padded='very'>
            <Card.Group itemsPerRow={4}>
              {showMultiView ?
              mappedlist(data.Search, props.fetchOne)
              : (data && <MoviePageCard data={data} />)
              }
              {data && data.Error}

            </Card.Group>
        </Segment>
        </div>
    )

}



export default Container



