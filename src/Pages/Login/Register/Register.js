import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if (loading || updating){
        return <Loading></Loading>
    }


    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div style={{minHeight: '63vh'}} className='register-form'>

            <PageTitle title='Register'></PageTitle>
            
            <h2 className='text-center text-info mt-4'>Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required/>

                <input type="password" name="password" id="" placeholder='Password' required/>

                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept AvgeekClicks Terms and Conditions</label>

                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-3' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
           
        </div>
    );
};

export default Register;