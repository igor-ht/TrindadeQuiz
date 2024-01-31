import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<header>
			<div className="header-logo">
				<Link to="/">
					<img
						src="./logo.svg"
						alt="logo"
					/>
				</Link>
			</div>
		</header>
	);
}
