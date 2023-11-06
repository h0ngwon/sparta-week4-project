import React from "react";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = (props) => {
	return (
		<>
			<h1>Working</h1>
			<div className={styles.container}>
				{props.items
					.filter((item) => item.isDone === false)
					.map((item) => (
						<TodoItem
							items={item}
							onDelete={props.onDeleteItem}
							onFinish={props.onFinishItem}
						/>
					))}
			</div>
			<h1>Done</h1>
			<div className={styles.container}>
				{props.items
					.filter((item) => item.isDone === true)
					.map((item) => (
						<TodoItem
							key={item.id}
							items={item}
							onDelete={props.onDeleteItem}
							onCancel={props.onCancelItem}
						/>
					))}
			</div>
		</>
	);
};

export default TodoItems;
