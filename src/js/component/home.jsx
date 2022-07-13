import React, { useRef, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {

	const [text, setText] = useState("");
	const [span, setSpan] = useState("none");
	const [objeto, setObjeto] = useState([])

	const handleAnswerChange = (event) => {

		if (event.key === 'Enter') {
			setObjeto([...objeto, text]), setSpan("inline-flex"), setText("")
			return
		} else true
	}
	console.log(objeto)
	const Span = () => {

		return (
			<>
				<span className="span">{objeto}</span>
			</>
		)
	}

	return (
		<>
			<Header />
			<TodoList text={text} setText={setText} handleAnswerChange={handleAnswerChange} objeto={objeto} span={span} />
		</>
	);
};

export default Home;
