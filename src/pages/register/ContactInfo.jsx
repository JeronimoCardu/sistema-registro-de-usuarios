import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
 
const ContactInfo = () => { 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ 
    email: '', 
    phone: '', 
    address: '', 
    city: '' 
  }); 
 
  React.useEffect(() => { 
    // Cargar datos previos del localStorage 
    const savedData = JSON.parse(localStorage.getItem('registrationData') || '{}'); 
    setFormData(prev => ({ ...prev, ...savedData })); 
  }, []); 
 
  const handleChange = (e) => { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Guardar en localStorage 
    localStorage.setItem('registrationData', JSON.stringify({ 
      ...JSON.parse(localStorage.getItem('registrationData') || '{}'), 
      ...formData 
    })); 
    navigate('/register/confirmation'); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <h2>Información de Contacto</h2> 
       
      <div style={{ marginBottom: '15px' }}> 
        <label>Email:</label> 
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        /> 
      </div> 
 
      <div style={{ marginBottom: '15px' }}> 
        <label>Teléfono:</label> 
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        /> 
      </div> 
 
      <div style={{ marginBottom: '15px' }}> 
        <label>Dirección:</label> 
        <input 
          type="text" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        /> 
      </div> 
 
      <div style={{ marginBottom: '15px' }}> 
        <label>Ciudad:</label> 
        <input 
          type="text" 
          name="city" 
          value={formData.city} 
          onChange={handleChange} 
          style={{ width: '100%', padding: '8px' }} 
          required 
        /> 
      </div> 
 
      <div style={{ marginTop: '20px' }}> 
        <button  
          type="button"  
          onClick={() => navigate('/register/personal')} 
          style={{ marginRight: '10px' }} 
        > 
          Anterior 
        </button> 
        <button type="submit">Siguiente</button> 
      </div> 
    </form> 
  ); 
}; 
 
export default ContactInfo; 