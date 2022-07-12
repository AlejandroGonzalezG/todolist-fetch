import React from "react";



const estiloH1 = {
    width: "100%",
    textAlign: "center",
    marginTop: "40px",
    marginBottom: "20px",
    color: "#848688",
    fontSize: "70px"
}


const Header = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="encabezado"  style={estiloH1}>todos</h1>
                </div>
            </div>
        </div>
    )

}


export default Header;