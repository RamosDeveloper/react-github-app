import useFormulario from '../hooks/useFormulario';

const FormularioUsuario = ({setUsuario}) => {
    const [formulario, handleChange, reset] = useFormulario({ usuario: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsuario(formulario);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <input 
                    id="txtUsuario"
                    name="usuario" 
                    type="text"
                    className="form-control"
                    placeholder="Teclea un usuario de Github y presiona Enter" 
                    value={formulario.usuario} 
                    onChange={handleChange}
                />
            </div>
        </form>
    );
}

export default FormularioUsuario;