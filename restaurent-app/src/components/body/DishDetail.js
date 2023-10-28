import React from 'react'
import {Card, CardImg,CardText, CardTitle, CardBody} from 'reactstrap';
import LoadComments from './LoadComments';
const DishDetail = ({dish}) => {
  return (
    <div>
  <Card className='my-2'>
    <CardImg
      alt="Card image cap"
      src={dish.image}
      style={{
        height: '100%'
      }}
      width="100%"
    />
    <CardBody style={{textAlign: 'left', color: 'black'}}>
      <CardTitle tag="h5"> {dish.name} </CardTitle>
      <CardText>
       {dish.description}
      </CardText>
      <CardText>
      {dish.price}/-
      </CardText>
   
       <hr/>
       <LoadComments comments={dish.comments}/>
    </CardBody>
  </Card>
</div>
  )
}

export default DishDetail