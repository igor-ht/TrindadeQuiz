import './MainContainer.scss';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
	return (
		<main>
			<div className="game-status-container">
				<Outlet />
			</div>
		</main>
	);
}
