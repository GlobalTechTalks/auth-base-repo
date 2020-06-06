import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GrFacebookOption } from 'react-icons/gr'

export const SocialButton = ({ type, text, onClick }) => {
	return (
		<div className="padding10 flexRow justifySpaceAround border-radius5 vertical-box-shadow10 cursor-pointer button" onClick={onClick} style={(type==='google')?{ backgroundColor: '#FFF' }:{ backgroundColor: '#172B4D' }} >
			<div>
				{
					(type === 'google')
					?
					<FcGoogle size='1.5em' />
					:
					<GrFacebookOption size='1.5em' color='#FFF' />
				}
			</div>

			<div className="flex1 font18 textAlignCenter" style={(type==='google')?{ color: '#8F8F8F' }:{color: '#FFF'}} >
				{text}
			</div>
		</div>
	)
}