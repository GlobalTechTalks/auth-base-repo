import React from 'react'
import { Link } from 'react-router-dom'
import validate from 'validate.js'
import { Card, Heading, Input, Button, SocialButton } from '../../Components'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const constraints = {

}

export const Signin = () => {
	
	const CLIENT_ID = ''

	const googleLogin = response => {
		console.log('google access token', response.Zi.access_token)
	}

	const facebookLogin = response => {
		console.log('facebookLogin Response', response)
	}

	return (
		<>
			<div className='flexRow justifyCenter alignCenter heightFull' >
				<Card>
					<Heading>Sign in</Heading>

					<div>
						<Input label='Email or mobile' onChange={(value) => console.log(value)} />
						<Input label='Password' onChange={(value) => console.log(value)} />
					</div>
					<div className='flexRow justifyCenter' >
						<Button defaultText='Sign In' />
					</div>

					<div className='flexRow alignCenter justifySpaceBetween padding10 marginVertical10' >
						<GoogleLogin
							clientId={CLIENT_ID}
							buttonText='Signin with Google'
							onSuccess={ googleLogin }
							cookiePolicy={ 'single_host_origin' }
							responseType='code,token'
							render={socialProps => <SocialButton onClick={socialProps.onClick} type='google' text='Signin With Google' />}

				        />

				        <FacebookLogin
				            appId="1088597931155576"
				            fields="name,email,picture"
				            onClick={() => console.log('clecked FB')}
				            render={socialProps => <SocialButton type='facebook' text='Signin With Facebook' />}
				        />
					</div>
					
					<div className='flexRow justifyCenter' >
						New Member? &nbsp; <Link to="/register">Create a Free Account</Link>
					</div>
				</Card>
			</div>
		</>
	)
}