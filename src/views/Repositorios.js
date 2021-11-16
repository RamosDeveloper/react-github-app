import { useState, useEffect } from "react";
import { Link }  from "react-router-dom";

const Repositorios = () => {
    const [repositorios, setRepositorios] = useState([]);
    const usuario = window.location.pathname.split("/")[1];

    const getRepositorios = async () => {
        const response = await fetch(`https://api.github.com/users/${usuario}/repos`);
        const data = await response.json();

        setRepositorios([...data]);
    };

    useEffect(() => {
        getRepositorios();
    },[]);

    return (
        <div>
            <header className="bg-mediumvioletred p-4">
                <Link to="/user" className="position-absolute">
                    <i className="fas fa-arrow-left text-white"></i>
                </Link>                
                <h3 className="text-white text-center">Respositorios</h3>
            </header>
            <div className="container-fluid">
                <div className="row mt-3">
                    {repositorios.map(repo => 
                        <div key={repo.id} className="col-12 col-md-6 col-lg-4 col-xl-3 my-1">
                            <div className="card card-repos">
                                <div className="card-header repo-header">
                                    <span>{repo.name}</span>
                                    <i class="fas fa-folder"></i>
                                </div>
                                <div className="card-body">
                                    <div className="my-2">
                                        <span>Lenguaje:</span> <strong>{repo.language}</strong>
                                    </div>
                                    <div className="my-2">
                                        <a href={repo.svn_url} target="_blank">
                                            <small>{repo.svn_url}</small>
                                        </a>
                                    </div>
                                    <div className="my-2">
                                        <span>Tipo:</span> <strong>{(repo.visibility === "public" ? "Publico" : "Privado")}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    )
}

export default Repositorios;