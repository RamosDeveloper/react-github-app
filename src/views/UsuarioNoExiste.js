import { Link }  from "react-router-dom";

const UsuarioNoExiste = () => {
    return (
        <div>
            <header className="bg-mediumvioletred p-4">
                <Link to="/" className="position-absolute">
                    <i className="fas fa-arrow-left text-white"></i>
                </Link>                
                <h3 className="text-white text-center"></h3>
            </header>            
            <div className="row my-5">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="error-icon-container mb-5">
                                    <i class="fas fa-users-slash"></i>
                                </div>
                                <h4 className="text-center">El usuario no existe</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UsuarioNoExiste;