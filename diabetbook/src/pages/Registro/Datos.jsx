import React from "react";
import { Link } from "react-router-dom";

const Datos = (props) => {
    const {registro, handleDelete} = props
    //console.log(registro)

    return (

        // aqui  creamos unas tablas en las cuales se ubica la 
        //informacion que traemos del archivo registro por medio de los props

        <React.Fragment>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className ={"card-header py-3"}>
                        <h4 className="my-0 fw-normal">{registro.name}</h4>
                    </div>
                    
                    <div className="card-body ">

                        <h2 className="card-title pricing-card-title">
                            {(registro._id)}
                            <small className="h6 text-muted fw-light d-block">
                                Id
                            </small>
                        </h2>

                        <h3 className="card-title pricing-card-title">
                            {registro.resultado}
                            <small className="h6 text-muted fw-light d-block"> resultado </small>
                        </h3>

                        <h3 className="card-title pricing-card-title">
                           { registro.details}
                            <small className="h6 text-muted fw-light d-block"> Detalles</small>
                        </h3>

                        <ul className="list-unstyled mt-3 mb-4">
                           <li>{registro.date}</li>
                        </ul>
                        <div className="button-delete">
                            <button type="button"
                                className="w-100 btn btn-lg btn-outline" 
                                onClick={()=>{handleDelete(registro)}}>
                                    Delete 
                            </button>
                        </div>
                        <div className="button-edit">
                            <Link to="/editar" className="w-100 btn btn-lg btn-outline">
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
}

export default Datos;