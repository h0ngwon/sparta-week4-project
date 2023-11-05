import React from "react";
import Card from "./UI/Card";
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
						<Card key={item.id}>
							<TodoItem
								items={item}
								onDelete={props.onDeleteItem}
                                onFinish={props.onFinishItem}
							/>
						</Card>
					))}
			</div>
			<h1>Done</h1>
			<div className={styles.container}>
				{props.items
					.filter((item) => item.isDone === true)
					.map((item) => (
						<Card key={item.id}>
							<TodoItem key={item.id} items={item} />
						</Card>
					))}
			</div>
		</>
	);
};

export default TodoItems;