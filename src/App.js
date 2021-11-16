import './App.css';
import { useState } from "react";
import { useNavigate } from 'react-router';
import { Routes, Route } from "react-router-dom";
import Swal from 'sweetalert2';

import Principal from './views/Principal';
import Resumen from './views/Resumen';
import Repositorios from './views/Repositorios';
import Seguidores from './views/Seguidores';
import UsuarioNoExiste from './views/UsuarioNoExiste';

const App = () => {
  const [informacionUsuario,seInformacionUsuario] = useState(null);
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  let navigate = useNavigate();

  const setUsuario = async ({usuario}) => {
    if(usuario !==  null && usuario !== "" ) {
      const response = await fetch(`https://api.github.com/users/${usuario}`);  
      const data = await response.json();

      if(response.status === 404) {
        seInformacionUsuario(null);
        setMostrarInformacion(false);  

        navigate("/usernotfound");
      }else {
        seInformacionUsuario(data);
        setMostrarInformacion(true);

        navigate("/user");
      }
      
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Importante!',
        text: 'Necesitas teclear el usuario para poder buscar'
      });  
      
      seInformacionUsuario(null);
      setMostrarInformacion(false);      
    }
  };

  return (
    <div className="App position-relative">
      <div className="row h-100">
        <div className="col-12 h-100">          
            <Routes>
              <Route path="/" exact element={<Principal setUsuario={setUsuario} />}/>
              { mostrarInformacion ? <Route path="/user" exact element={<Resumen informacion={informacionUsuario} />}/> : null }
              { mostrarInformacion ? <Route path="/:user/repositorios" exact element={<Repositorios />}/> : null }
              { mostrarInformacion ? <Route path="/:user/seguidores" exact element={<Seguidores setUsuario={setUsuario} />}/> : null }
              <Route path="/usernotfound" exact element={<UsuarioNoExiste/>} />
            </Routes>          
        </div>
      </div>
    </div>
  );
}

export default App;