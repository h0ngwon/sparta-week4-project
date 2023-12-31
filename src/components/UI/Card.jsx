import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
	return (
		<div
			className={`${styles.card} ${
				props.items.isDone ? styles.done : ""
			}`}
		>
			{props.children}
		</div>
	);
};

export default Card;
