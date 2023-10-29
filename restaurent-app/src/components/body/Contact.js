import React, { Component } from 'react';
import { Button,Form, FormGroup, Label, Input, Col,} from 'reactstrap';
import Option from 'react'
export class Contact extends Component {
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
  }
  render() {
    return (
      <div className='container'>
        <div className='row row-content' style={{paddingLeft: '20px', textAlig: 'left'}}>
          <div className='col-12'>
            <h3>Sent us your Feedback</h3>
          </div>
            <div className='col-12 col-md-7'>
                <Form>
                  <FormGroup row>
                    <Label htmlFor='firstname' md={2}>
                      First Name
                    </Label>
                    <Col md={10}>
                      <Input type='text' name='firstname' placeholder='Frist Name'
                      value={this.state.fristname}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor='lastname' md={2}>Last Name</Label>
                    <Col>
                    <Input type='text' name='lastname' placeholder='Last Name' value={this.state.lastname}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor='telnum' md={2}>Contact Tel..</Label>
                    <Col>
                    <Input type='tel' name='telnum' placeholder='Tel. Number' value={this.state.lastname}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor='email' md={2}>Email Addres</Label>
                    <Col>
                    <Input type='text' name='telnum' placeholder='Email Addres..' value={this.state.email}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{size: 6, offset:2}}>
                      <FormGroup>
                        <Label check>
                        <Input type='chexkbox' name='agree'  checked={this.state.agree}/>
                        <strong>May we contact you ?</strong>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={{size: 3, offset: 1}}>
                      <Input type='select' name='contactType' value={this.state.contactType}>
                        <Option>Tel.</Option>
                        <Option>Email</Option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor='message' md={2}>Your Feedback</Label>
                    <Col md={10}>
                      <Input type='textarea' name='message' value={this.state.message} rows='12'>

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