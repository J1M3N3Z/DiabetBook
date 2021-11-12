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

    const handleDelete = (registro)=>
        console.log(handleDelete, registro._id)
        swal({
            title:"estas Seguro(a)?",
            text:"si borras, no se podra recuperar...",
            icon:"warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete)=>{
            if(willDelete){
                console.log(handleDelete,)
            }
        });

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