import React from 'react'

export const Input = (props) => {
	return (
		<>
			<div className='inputContainer margin10' >
				<div className="label marginHorizontal10">{props.label}</div>
				<input type="text" className='input' onChange={event => props.onChange(event.target.value)} className='input padding5 marginBottom10 marginLeft10 font18 width30v' />
			</div>
		</>
	)
}