import React from "react";
import Card from "./ui/Card"
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
	const deleteHandler = () => {
		props.onDelete(props.items.id);
	};

	const finishHandler = () => {
		props.onFinish(props.items.id);
	};

	const cancelHandler = () => {
		props.onCancel(props.items.id);
	};

	return (
		<Card items={props.items}>
			<div className={styles["item-container"]}>
				<h3>{props.items.title}</h3>
				<p>{props.items.desc}</p>
				<div className={styles["btn-wrapper"]}>
					<button
						className={styles["delete-btn"]}
						onClick={deleteHandler}
					>
						삭제
					</button>
					{props.items.isDone === false && (
						<button
							className={styles["finish-btn"]}
							onClick={finishHandler}
						>
							완료
						</button>
					)}
					{props.items.isDone === true && (
						<button
							className={styles["finish-btn"]}
							onClick={cancelHandler}
						>
							취소
						</button>
					)}
				</div>
			</div>
		</Card>
	);
};

export default TodoItem;
