import React from 'react'

export const Card = (props) => {
	return (
		<>
			<div className="general-card padding20">
				{props.children}
			</div>
		</>
	)
}