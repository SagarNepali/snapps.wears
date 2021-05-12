import React from 'react';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.scss'

class SignUp extends React.Component{

    constructor(){
        super();

        this.state={
            'displayName':'',
            'email':'',
            'password':'',
            'confirmPassword':''
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password!= confirmPassword){
            alert("Passwords dont match")
            return ;
        }

        alert(password)

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user, {displayName});

            this.setState=({
                'displayName':'',
                'email':'',
                'password':'',
                'confirmPassword':''
            })

        }catch(e){
            console.log(e.message);
        }

    }

    handleChange = event => {
        const{name,value} = event.target;

        this.setState({[name]:value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign Up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' value={displayName} label='Display name' name='displayName' required onChange={this.handleChange}/>
                    <FormInput type='email' value={email} label='Email' name='email' onChange={this.handleChange}/>
                    <FormInput type='password' value={password} label='Password' name='password' onChange={this.handleChange}/>
                    <FormInput type='password' value={confirmPassword} label='Confirm Password' name='confirmPassword' onChange={this.handleChange}/>

                    <CustomButton type='submit'>Sign up</CustomButton>
                    
                </form>
            </div>
        )
    }
}

export default SignUp;