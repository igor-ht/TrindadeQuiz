import { Link } from 'react-router-dom';
import './CategoryCard.scss';

interface IProps {
	name: string;
	totalQuestions: number;
	answered: number;
	correct: number;
}

export default function CategoryCard(props: IProps) {
	return (
		<div className="category-card-container">
			<Link to={`/${props.name.toLowerCase()}Quiz`}>
				<section className="category-name">
					<h1>{props.name}</h1>
				</section>
				<section className="category-progress">
					<h2>{(props.answered * 100) / props.totalQuestions}%</h2>
				</section>
				<section className="category-status">
					<span>
						<p>Total Questions: {props.totalQuestions}</p>
					</span>
					<span>
						<p>Answered Questions: {props.answered}</p>
					</span>
					<span>
						<p>Correct Answers: {props.correct}</p>
					</span>
					<span>
						<p>Wrong Answers: {props.answered - props.correct}</p>
					</span>
					<span>
						<p>Total Points: {props.correct * 10}</p>
					</span>
				</section>
			</Link>
		</div>
	);
}
