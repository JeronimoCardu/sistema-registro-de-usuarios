import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Limpia el error al escribir
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()){
      newErrors.firstName = 'El nombre es obligatorio';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es obligatorio';
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'La fecha de nacimiento es obligatoria';
    }
    if (!formData.gender) {
      newErrors.gender = 'Seleccioná un género';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Guardar en localStorage para persistir entre pasos
    localStorage.setItem(
      'registrationData',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('registrationData') || '{}'),
        ...formData
      })
    );

    navigate('/register/contact');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Información Personal</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>Nombre:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Apellido:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.dateOfBirth && <p style={{ color: 'red' }}>{errors.dateOfBirth}</p>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Género:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="">Seleccionar</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>
          <button type="button">Cancelar</button>
        </Link>
        <button type="submit">Siguiente</button>
      </div>
    </form>
  );
};

export default PersonalInfo;
