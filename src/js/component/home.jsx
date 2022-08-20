import React, { useEffect, useRef, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {

	const [text, setText] = useState("");
	const [span, setSpan] = useState("none");
	const [objeto, setObjeto] = useState([])

	useEffect(() =>
		fetch('http://assets.breatheco.de/apis/fake/todos/user/alesanchezr')
			.then(response => response.json())
			.then(data => setObjeto(data))
			.catch(error => console.log(error))
		, [])

	useEffect(() => {
		if (objeto != []) {
			fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
				method: "PUT",
				body: JSON.stringify(objeto),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					console.log(resp.ok);
					console.log(resp.status);
					console.log(resp.text());
					return resp.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}, [objeto])

	const handleAnswerChange = (e) => {

		if (e.key === 'Enter') {
			let auxarr = [...objeto];
			let nuevoObjeto = { "label": e.target.value, "done": false }
			auxarr.push(nuevoObjeto);
			setObjeto(auxarr);
			setSpan("inline-flex");
			setText("");
			return
		} else true
	}
	
	return (
		<>
			<Header />
			<TodoList text={text} setText={setText} handleAnswerChange={handleAnswerChange} objeto={objeto} setObjeto={setObjeto} span={span} />
		</>
	);
};

export default Home;
