import React, {useState} from "react";



const estiloDiv = {
    textAlign: "center",
}

const estiloInput = {
    width: "50%",
}


const TodoList = (props) => {

    

    const estiloSpan = {
        width: "50%",
        display: props.span ,
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12"  style={estiloDiv} >
                    <input type="text" className="text" style={estiloInput} value={props.text} onChange={(e) => props.setText(e.target.value)} onKeyPress={(props.handleAnswerChange)}/>
                    <br></br>
                    <span style={estiloSpan}>{props.objeto}</span>
                </div>
            </div>
        </div>
    )
}


export default TodoList; 