import './CategoryCard.scss';
import { Link } from 'react-router-dom';

interface IProps {
	name: string;
	totalQuestions: number;
	answered: number;
	correct: number;
}

export default function CategoryCard(props: IProps) {
	return (
		<Link
			className="link-to-category"
			to={`/${props.name?.toLowerCase()}Quiz`}>
			<div className="category-card-container">
				<section className="category-name">
					<h1>{props.name}</h1>
				</section>
				<section className="category-progress">
					<h2>Progress: </h2>
					<h2>{(props.answered * 100) / props.totalQuestions}%</h2>
				</section>
				<section className="category-status">
					<span>
						<p>Total Questions: </p>
						<p>{props.totalQuestions}</p>
					</span>
					<span>
						<p>Answered Questions: </p>
						<p>{props.answered}</p>
					</span>
					<span>
						<p>Correct Answers: </p>
						<p>{props.correct}</p>
					</span>
					<span>
						<p>Wrong Answers: </p>
						<p>{props.answered - props.correct}</p>
					</span>
					<span>
						<p>Total Points: </p>
						<p>{props.correct * 10}</p>
					</span>
				</section>
			</div>
		</Link>
	);
}
