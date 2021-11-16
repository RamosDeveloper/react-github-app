import { Link }  from "react-router-dom";

const Resumen = ({informacion}) => {
        
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="card card-resumen bg-white">
                            <div className="card-header bg-mediumvioletred">
                                <Link to="/">
                                    <i className="fas fa-arrow-left text-white"></i>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="avatar-container text-center">
                                    <img src={informacion.avatar_url} alt={informacion.login} className="img-fluid avatar-img" />
                                </div>
                                <div className="text-center">
                                    <h3>{informacion.name}</h3>
                                    <h5><code>{informacion.login}</code></h5>
                                </div>
                                <div className="informacion-adicional container-fluid my-3">
                                    <div className="repos">    
                                        <Link to={`/${informacion.login}/repositorios`}>
                                            <i className="fas fa-folder adicional-font-size"></i>
                                        </Link>                                                                            
                                    </div>
                                    <div className="followers">  
                                        <Link to={`/${informacion.login}/seguidores`}>
                                            <i className="fas fa-users adicional-font-size"></i>
                                        </Link>                                                                                                                   
                                    </div>                                    
                                </div>
                                <div className="informacion-adicional container-fluid mb-3">
                                    <kbd>Repositorios</kbd>
                                    <kbd>Seguidores</kbd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resumen;