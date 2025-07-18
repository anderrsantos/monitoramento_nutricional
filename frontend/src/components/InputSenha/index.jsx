import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

/**
 * Componente reutilizável de campo de senha com alternância de visibilidade.
 *
 * @component
 * @param {Object} props
 * @param {string} props.id - ID do campo de entrada.
 * @param {string} props.name - Nome do campo de entrada.
 * @param {string} props.placeholder - Texto placeholder exibido quando o campo está vazio.
 * @param {string} props.value - Valor atual do campo (controlado externamente).
 * @param {Function} props.onChange - Função chamada ao modificar o valor do campo.
 *
 * @returns {JSX.Element} Campo de senha com botão para alternar entre visível e oculto.
 */
function InputSenha({ id, name, placeholder, value, onChange }) {
  // Estado para controlar se a senha está visível ou não
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <div className="input-group">
      {/* Campo de input tipo password ou text, dependendo da visibilidade */}
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
      
      {/* Botão para alternar visibilidade da senha */}
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
