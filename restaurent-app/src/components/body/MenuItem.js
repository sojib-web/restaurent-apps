import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const MenuItem = ({dish, DishSelect}) => {
   
  return (
    <div>
  <Card inverse style={{padding: 10, margin: 10, cursor:'pointer'}} onClick={() => DishSelect(dish)}>
    <CardImg alt={dish.name} src={dish.image} style={{ height: 270, opacity: 0.5 }} width="100%"/>
    <CardImgOverlay>
      <CardTitle tag="h5" style={{fontSize:30, fontWeight: 'bold', color: 'black'}}>
        {dish.name}
      </CardTitle>
    </CardImgOverlay>
  </Card>
</div>
  )
}

export default MenuItem