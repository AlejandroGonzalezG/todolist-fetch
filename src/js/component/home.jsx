import React, { useRef, useState }  from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {

	const [text, setText] = useState("");

	return (
		<>
			<Header />
			<TodoList text={text} setText={setText}/>
		</>
	);
};

export default Home;
