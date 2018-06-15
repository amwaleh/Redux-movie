import React from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = ({data}) => (

  <Card>
    <Image src={data.Poster} />
    <Card.Content>
      <Card.Header>{data.Title}</Card.Header>
      <Card.Meta>
        <span > {data.Year} </span>
      </Card.Meta>
      {
          console.log('hapa',data)
      }
      <Card.Description>{data.Title}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)


export default MovieCard