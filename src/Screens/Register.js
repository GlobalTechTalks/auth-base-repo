import React from 'react'
import { Link } from 'react-router-dom'
import Granim from 'react-granim'
import { Card, Heading, Input, Button } from '../Components'

export const Register = () => {
	return (
		<>
			<Granim id="granim"></Granim>
			<div className='flexRow justifyCenter alignCenter heightFull' >
				<Card>
					<Heading>Register</Heading>

					<div>
						<Input label='Name' onChange={(value) => console.log(value)} />
						<Input label='Email' onChange={(value) => console.log(value)} />
						<Input label='Password' onChange={(value) => console.log(value)} />
						<Input label='Mobile' onChange={(value) => console.log(value)} />
					</div>

					<div className='flexRow justifyCenter' >
						<Button defaultText='Sign Up' />
					</div>

					<div className='flexRow justifyCenter' >
						Already a Member? &nbsp; <Link to="/">Sign in here</Link>
					</div>
				</Card>
			</div>
		</>
	)
}

