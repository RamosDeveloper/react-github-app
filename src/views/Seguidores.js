import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { Link }  from "react-router-dom";

const Seguidores = ({setUsuario}) => {
    const [seguidores, setSeguidores] = useState([]);
    const usuario = window.location.pathname.split("/")[1];
    let navigate = useNavigate();

    const getSeguidores = async () => {
        const response = await fetch(`https://api.github.com/users/${usuario}/followers`);
        const data = await response.json();

        setSeguidores([...data]);
    };

    const setSeguidor = seguidor => {
        setUsuario({usuario: seguidor.login});
        navigate("/user");
    };

    useEffect(() => {
        getSeguidores();
    },[]);

    return (
        <div>
            <header className="bg-mediumvioletred p-4">
                <Link to="/user" className="position-absolute">
                    <i className="fas fa-arrow-left text-white"></i>
                </Link>                
                <h3 className="text-white text-center">Seguidores</h3>
            </header>
            <div className="container-fluid">
                <div className="row mt-3">
                    {seguidores.map(seguidor => 
                        <div key={seguidor.id} className="col-12 col-md-6 col-lg-4 col-xl-3 my-1">
                            <div className="card card-seguidores">
                                <div className="card-body text-center">
                                    <img src={seguidor.avatar_url} alt={seguidor.id} className="img-fluid img-seguidor" onClick={() => {setSeguidor(seguidor)}} />
                                    <h5>{seguidor.login}</h5>
                                    <a href={seguidor.html_url} target="_blank">
                                        <small>{seguidor.html_url}</small>
                                    </a>                                    
                                </div>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    )
}

export default Seguidores;