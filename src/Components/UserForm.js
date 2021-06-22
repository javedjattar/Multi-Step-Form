import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             step:1,
             firstName:"",
             lastName:"",
             email:"",
             occupation:"",
             city:"",
             bio:""
        }
    }
    // proceed to Next step
    nextStep = () =>{
        const {step}= this.state;
        this.setState({
            step: step + 1
        });
    }
    
    // Go back to previous step
    prevStep = () =>{
        const {step}= this.state;
        this.setState({
        step: step - 1
        });
    }

    // Handling fields change
    handleChange = input => event =>{
        this.setState({[input]: event.target.value});
    }


    render() {
        // Pulling step out of state by destructuring
        const {step}= this.state;
        // Pulling step out of fields
        const {firstName, lastName, email,occupation,city,bio} = this.state;
        const values ={firstName, lastName, email,occupation,city,bio}
        switch(step){
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange ={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange ={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 4:
                return(
                    <Success/>
                )
        }
       
    }
}

export default UserForm
