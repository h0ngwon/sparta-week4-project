import React from "react";
import Card from "./UI/Card";
import styles from "./TodoItems.module.css";

const TodoItems = (props) => {
	return (
		<div className={styles.container}>
            <h1>Working</h1>
            <Card></Card>
            <h1>Done</h1>
            <Card></Card>
        </div>
	);
};

export default TodoItems;
