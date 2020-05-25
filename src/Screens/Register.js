import React from 'react'
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
						<Button defaultText='No Thanks' />
					</div>
				</Card>
			</div>
		</>
	)
}

