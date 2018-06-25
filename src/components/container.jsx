import React from 'react'
import MovieListPage ,{ MoviePageCard }from './card'
import { Card } from 'semantic-ui-react'
import { Input, Grid, Icon, Header } from 'semantic-ui-react'

const SearchInput = ({ setSearchTerm, search, fetchAll}) => {

const action = {
        color: 'purple',
        labelPosition: 'left',
        icon: 'search',
        content: 'Search',
        size: 'mini',
        'onClick': ()=> fetchAll(search)
    }

  return (<Input fluid action={action}  onChange={(e) => setSearchTerm(e.target.value)} />)
}

const mappedlist= (lis, fetchOne) =>(
    <Card.Group centered width={'200px'} itemsPerRow={4}>
    {lis.map((data)=> (<MovieListPage data={data} color={'purple'} key={data.imdbID} onClick={fetchOne}/>))}
    </Card.Group>
    )

// const singleView = (data) =>

const Container = (props) => {
    const { data, multiView } = props
    const showMultiView = data && !data.Error && multiView
    const size = data ? 'mini' : 'small'
    return (
        <Grid centered container columns={2} verticalAlign={'middle'}>
         <Grid.Row>
        <Grid.Column centered columns={1}>
         <Header color={'teal'} size={'huge'}>
        <Icon.Group size={size}>
        <Icon loading size={'large'} name='spinner'  color={'grey'} />
        <Icon size={'large'} name='play circle'  color={'purple'} />
        </Icon.Group>

        Search for movie</Header>
        <SearchInput {...props}  />
        </Grid.Column>
         </Grid.Row>
        <Grid.Row >
            {showMultiView ?
            mappedlist(data.Search, props.fetchOne)
            : (data && !data.Error && <MoviePageCard data={data} />)
            }
            <Header color={'red'}>{data && data.Error} </Header>

         </Grid.Row>
        </Grid>
        )

}



export default Container



