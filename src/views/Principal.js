import FormularioUsuario from "../components/FormularioUsuario";

const Principal = ({setUsuario}) => {

    return (
        <div className="row h-100 bg-principal">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center h-100 bg-white">
                <i className="fab fa-github icono-principal"></i>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center h-100">
                <div className="row w-100">
                    <div className="col-12">
                        <FormularioUsuario setUsuario={setUsuario} />
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default Principal;