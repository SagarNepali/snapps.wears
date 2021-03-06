import React from 'react'
import CustomButton from '../custom-button/custom-button';

import FormInput from '../form-input/form-input'
import './sign-in.scss'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'', password:""}) 
        }catch(error){
            console.log(error.message)
        }

        
    }

    handleChange = event => {

        const {value, name} = event.target;

        this.setState({ [name] :value })

    }


    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="EMAIL" name="email" type="email" handleChange={this.handleChange} value={this.state.email}  required/>
                    <FormInput label="PASSWORD" name="password" type="password" handleChange={this.handleChange} value={this.state.password} required/>

                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
                    </div>
                   

                </form>

            </div>
        )
    }

    
}

export default SignIn;