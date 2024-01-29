import { ButtonHTMLAttributes, FC } from 'react';

type Button = FC<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: Button = (props) => {
	return (
		<button
			{...props}>
			Check answer
		</button>
	);
};

export default Button;
