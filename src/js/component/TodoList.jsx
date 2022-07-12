import React, {useState} from "react";



const estiloDiv = {
    textAlign: "center",
}

const estiloInput = {
    width: "50%",
}


const TodoList = (props) => {

    const [span, setSpan] = useState("none");

    const estiloSpan = {
        width: "50%",
        display: span ,
    }
    
    const handleAnswerChange = (event) => {
        let objeto = [];
        let i=0;
            if(event.key === 'Enter'){
                objeto.push(props.text), setSpan("inline-flex"),props.setText(""), console.log(objeto)
                return objeto
        } else true;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12"  style={estiloDiv} >
                    <input type="text" className="text" style={estiloInput} value={props.text} onChange={(e) => props.setText(e.target.value)} onKeyPress={(handleAnswerChange)}/>
                    <br></br>
                    <span style={estiloSpan}>sdf</span>
                </div>
            </div>
        </div>
    )
}


export default TodoList;