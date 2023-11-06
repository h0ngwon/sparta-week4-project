import NewTodo from "./components/NewTodo";
import styles from "./App.module.css";
import { useState } from "react";
import TodoItems from "./components/TodoItems";

const INITIAL_DATA = [
	{
		id: Math.random(),
		title: "리액트 공부",
		desc: "리액트 공부하기",
		isDone: false,
	},
	{
		id: Math.random(),
		title: "타입스크립트 공부",
		desc: "타입스크립트 공부하기",
		isDone: false,
	},
	{
		id: Math.random(),
		title: "알고리즘 공부",
		desc: "알고리즘 공부하기",
		isDone: true,
	},
];

function App() {
	const [todo, setTodo] = useState(INITIAL_DATA);

	const addTodoHandler = (todoItem) => {
		setTodo((prevTodo) => {
			return [...prevTodo, todoItem];
		});
	};

	const deleteHandler = (todoId) => {
		setTodo((prevTodo) => {
			const updateTodo = prevTodo.filter((item) => item.id !== todoId);
			return updateTodo;
		});
	};

	const finishOrCancelHandler = (todoId) => {
		setTodo((prevTodo) => {
			const updateTodo = prevTodo.map((todo) =>
				todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
			);
			return updateTodo;
		});
	};

	return (
		<div className={styles.container}>
			<NewTodo onAddTodo={addTodoHandler} />
			<TodoItems
				items={todo}
				onDeleteItem={deleteHandler}
				onFinishItem={finishOrCancelHandler}
                onCancelItem={finishOrCancelHandler}
			/>
		</div>
	);
}

export default App;
