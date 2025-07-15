import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Componente reutilizável para o campo de senha
function InputSenha({ id, name, placeholder, value, onChange }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <div className="input-group">
      <input
        type={senhaVisivel ? 'text' : 'password'}
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => setSenhaVisivel(!senhaVisivel)}
        title={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
      >
        {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default InputSenha;