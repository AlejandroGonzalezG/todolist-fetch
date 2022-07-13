import React, { useState } from "react";
import { MdOutlineClose } from 'react-icons/md';



const estiloDiv = {
    textAlign: "center",
}

const estiloInput = {
    width: "50%",
}

const estiloDivMap = {
    margin: "3px"
}


const TodoList = (props) => {



    const estiloSpan = {
        width: "50%",
        display: props.span,
    }

    const eliminar = (num) => {
        const index = props.objeto[num];
        if (num > -1) { 
            props.objeto.splice(num, 1);
            num = num-1
            console.log(props.objeto)
        }
    }
    
    useEffect(() => {
    
    }, [eliminar()]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12" style={estiloDiv} >
                    <input type="text" className="text" style={estiloInput} value={props.text} onChange={(e) => props.setText(e.target.value)} onKeyPress={(props.handleAnswerChange)} />
                    <br></br>
                    {
                        props.objeto.length > 0 &&
                        props.objeto.map((obj, num = num+1) => (
                            <div className="col-12" key={num} style={estiloDivMap}>
                                <span id={num} style={estiloSpan}>{obj}</span><MdOutlineClose id={num} onClick={() => eliminar(num)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default TodoList; 