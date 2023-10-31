import React, { Component } from 'react';
import { Button,Form, FormGroup, Label, Input, Col,} from 'reactstrap';

class Contact extends Component {
  constructor (props){
    super(props);
    this.state ={
      fristname : '',
      lastname: '',
      telnum: '',
      email : '',
      agree : false,
      contactType : 'tel.',
      message : ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = event =>{
    const value = event.target.type ==='checkbox' ? event.target.checked :event.target.value;
    const name = event.target.name;
    this.setState({
      [name] : value
    })
  }

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    document.title ='Menu'
    return (
      <div className='container'>
        <div className='row row-content' style={{paddingLeft: '20px', textAlig: 'left'}}>
          <div className='col-12'>
            <h3>Sent us your Feedback</h3>
          </div>
            <div className='col-12 col-md-7'>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor='fristname' md={2}>
                      First Name
                    </Label>
                    <Col md={10} >
                      <Input type='text'
                       name='fristname' 
                       placeholder='First name'
                       value={this.state.fristname}
                       onChange={this.handleInputChange}
                       />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor='lastname' md={2}>Last Name</Label>
                    <Col>
                    <Input type='text'
                     name='lastname'
                     placeholder='Last Name'
                     value={this.state.lastname}
                     onChange={this.handleInputChange}
                     
                     />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor='telnum' md={2}>Contact Tel..</Label>
                    <Col>
                    <Input type='number' 
                    name='telnum' 
                    placeholder='Tel. Number' 
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                    
                    />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor='email' md={2}>Email Addres</Label>
                    <Col>
                    <Input type='email' 
                    name='email' 
                    placeholder='Email Addres..'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />
                    </Col>
                  </FormGroup>
                  <FormGroup row >
                    <Col md={{size: 6, offset:2}}>
                      <FormGroup>
                        <Label check>
                        <Input 
                        type='chexkbox' 
                        name='agree'  
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                         
                        />
                        <strong>May we contact you ?</strong>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={{size: 3, offset: 1}}>
                      <Input 
                      type='select' 
                      name='contactType' 
                       onChange={this.handleInputChange}
                       value={this.state.contactType} >
                        <option>Tel.</option>
                        <option>Email</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor='message' md={2}>Your Feedback</Label>
                    <Col md={10}>
                      <Input 
                      type='textarea' 
                      name='message' 
                      value={this.state.message} rows='12'
                      onChange={this.handleInputChange}
                      >

                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md = {{size: 10, offset:2}}>
                      <Button type='submit' color='primary'>
                      Send Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                  
                </Form>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact