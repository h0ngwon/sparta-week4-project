import React from "react";
import Card from "./UI/Card";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = (props) => {
	return (
		<>
			<h1>Working</h1>
			<div className={styles.container}>
				{props.items.map((item) => (
					<Card>
						<TodoItem items={item} />
					</Card>
				))}
			</div>
			<h1>Done</h1>
			<div>
				<Card></Card>
			</div>
		</>
	);
};

export default TodoItems;
