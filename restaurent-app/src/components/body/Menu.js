import MenuItem from "./MenuItem";
import DISHES from '../../data/dishes'
import DishDetail from "./DishDetail";
import { Component } from "react";
import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";

class Menu extends Component  {
  state ={
    dishes : DISHES,
    selectedDish : null,
    ModalOpen : false,
  };
   onSelecetedDish = (dish) =>{
      this.setState({
        selectedDish: dish,
        ModalOpen: true,

      });
    };

    toggleModal = () => {
      this.setState({
        ModalOpen:!this.state.ModalOpen
      })
    }

render () {
     const  menu = this.state.dishes.map((dish) => {
        return ( <MenuItem dish={dish} onSelecetedDish={this.onSelecetedDish} key={dish.id}/>);
    });

   const  dishDetail = this.state.selectedDish ? <DishDetail dish={this.state.selectedDish} /> : null;
      return (
        <div className='container'>
          <div className='row'>
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.ModalOpen} onClick={this.toggleModal}>
              {dishDetail}
              <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      )
    }
  
}

export default Menu;