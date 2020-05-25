import React from 'react'
import Granim from 'react-granim'
import { Card, Heading, Input, Button } from '../Components'

export const Signin = () => {
	return (
		<>
			<Granim id="granim"></Granim>
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
				</Card>
			</div>
		</>
	)
}