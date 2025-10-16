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
 
  const handleChange = (e) => { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Guardar en localStorage para persistir entre pasos 
    localStorage.setItem('registrationData', JSON.stringify({ 
      ...JSON.parse(localStorage.getItem('registrationData') || '{}'), 
      ...formData 
    })); 
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
          required 
        /> 
      </div> 
 
      <div style={{ marginBottom: '15px' }}> 
        <label>Apellido:</label> 
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        /> 
      </div> 
 
      <div style={{ marginBottom: '15px' }}> 
        <label>Fecha de Nacimiento:</label> 
        <input 
          type="date" 
          name="dateOfBirth" 
          value={formData.dateOfBirth} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        /> 
      </div> 
 
      <div style={{ marginBottom: '15px' }}> 
        <label>Género:</label> 
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        > 
          <option value="">Seleccionar</option> 
          <option value="male">Masculino</option> 
          <option value="female">Femenino</option> 
          <option value="other">Otro</option> 
        </select> 
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