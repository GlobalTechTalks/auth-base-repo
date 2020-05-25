import React from 'react'

export const Button = (props) => {
	return (	
		<div className={`button cursor-pointer margin10 padding10 border-radius10 backgroundColorPurple fontColorWhite ${(props.disabled || props.loading) ? 'disabled' : null} flexRow justifyCenter ${(props.buttonClass) ? props.buttonClass : null}`}>
			{
				(props.loading)
				?
				<div className="flexrow justifyCenter">
					<div className={`font20 ${props.textClassName}`}>
						{props.loadingText || 'Loading'}
					</div>
				</div>
				:
				(props.disabled)
				?
				<div className="flexrow justifyCenter">
					<div className={`font20 ${props.textClassName}`}>
						{props.disabledText || props.defaultText}
					</div>
				</div>
				:
				<div className="flexrow justifyCenter">
					<div className={`font20 ${props.textClassName}`}>
						{props.disabledText || props.defaultText}
					</div>
				</div>
			}
		</div>
	)
}