import React from "react";
import Card from "./UI/Card";
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const TodoItems = (props) => {
	return (
		<>
			<h1>Working</h1>
			{props.items.length === 0 && <span>아이템을 추가해 주세요.</span>}
			<div className={styles.container}>
				{props.items.map((item) => (
					<Card key={item.id}>
						<TodoItem
							key={item.id}
							id={item.id}
							items={item}
							onDelete={props.onDeleteItem}
						/>
					</Card>
				))}
			</div>
			<h1>Done</h1>
			<div className={styles.container}>
			</div>
		</>
	);
};

export default TodoItems;
