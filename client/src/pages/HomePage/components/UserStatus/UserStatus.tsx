import './UserStatus.scss';
import { userStatusState } from '@/redux/features/userStatusSlice';
import { useAppSelector } from '@/redux/hooks';

export default function UserStatus() {
	const userStatus = useAppSelector(userStatusState);

	return (
		<div className="user-status">
			<section>
				<h1>Current progress: {userStatus.progress}%</h1>
			</section>
			<section>
				<h1>Total Points: {userStatus.grade}/100 </h1>
			</section>
		</div>
	);
}
