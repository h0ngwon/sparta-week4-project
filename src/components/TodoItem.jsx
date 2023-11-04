import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
	return (
		<div className={styles["item-container"]}>
			<h3>{props.items.title}</h3>
			<p>{props.items.desc}</p>
            <div className={styles['btn-wrapper']}>
                <button className={styles['delete-btn']}>삭제</button>
                <button className={styles['finish-btn']}>완료</button>
            </div>
		</div>
	);
};

export default TodoItem;
