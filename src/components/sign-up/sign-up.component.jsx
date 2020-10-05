import React from 'react';
import './sign-up.styles.scss';
import Forminput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js'

class SignUp extends React.Component{
    constructor(){
        super();


        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have a account</h2>
                <span> Sign in with your email and password</span>
                <form className='sign-up-form' onClick={this.handleSubmit}>
                    <Forminput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required/>
                    <Forminput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required/>
                    <Forminput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required/>
                    <Forminput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required/>
                        <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp;