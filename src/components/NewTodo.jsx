import React from "react";
import styles from "./NewTodo.module.css";
import { useState } from "react";

const NewTodo = (props) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const titleChangeHandler = (e) => {
		setTitle(e.target.value);
	};

	const descChangeHandler = (e) => {
		setDesc(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const data = {
			id: Math.random(),
			title: title,
			desc: desc,
			isDone: false,
		};
        
        if(title.trim().legnth === 0) {
            alert('제목을 입력하세요');
            return;
        }

        if(desc.trim().length === 0) {
            alert("내용을 입력하세요");
            return;
        }

		props.onAddTodo(data);
		setTitle("");
		setDesc("");
	};
	return (
		<div className={styles["new-todo-container"]}>
			<form onSubmit={submitHandler}>
				<div className={styles["title-container"]}>
					<label>제목</label>
					<input
						name="title"
						value={title}
						required
						onChange={titleChangeHandler}
					></input>
				</div>
				<div className={styles["desc-container"]}>
					<label>내용</label>
					<input
						name="desc"
						value={desc}
						required
						onChange={descChangeHandler}
					></input>
				</div>
				<button className={styles["add-btn"]}>추가</button>
			</form>
		</div>
	);
};

export default NewTodo;
