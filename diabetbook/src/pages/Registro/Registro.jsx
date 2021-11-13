import Datos from "./Datos"
import swal from "sweetalert"

const Registro = () =>{
    const fecha = new Date().toLocaleString();
    const registros = [
        {
        _id:1,
        nombre:"paciente1", 
        detalles:"Soy Detalles", 
        resultado:"Soy Resultado", 
        fecha:fecha,
        },
        {
        _id:2,
        nombre:"paciente2", 
        detalles:"Soy Detalles2", 
        resultado:"Soy Resultado2", 
        fecha:fecha,
        }
    ]


    // en esta parte se crea una constante handledelete para hacer 
    // la funcion de eliminar se le añade tambien una sweetalert personalizada 

    const handleDelete = (registro)=>
        swal({
            title:"Estas Seguro(a)?",
            text:"Si Borras, No lo Podras Recuperar...",
            icon:"warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete)=>{
            if(willDelete){
                console.log(handleDelete,)
                swal("El Registro" + registro._id + " Fue Borrada", {
                    icon: "success",
                })
            }
        });




    // Aqui estamos retornado el contenido de las llaves de la parte superior 
    // y la funcion .map lo que hace es recorrer y no entrega los valores que solicitamos
    // los cuales son importados al archivo Datos por meedio de los props

    return (
        <div>
            <ul>
            <div className="p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Hello Daniel</h1>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center"></div>
                    {registros.map((registro) => (
                        <Datos 
                        key={registro._id} 
                        registro={registro} 
                        handleDelete={handleDelete}/>      
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default Registro