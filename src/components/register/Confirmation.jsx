import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
 
const Confirmation = () => { 
  const navigate = useNavigate(); 
  const [registrationData] = React.useState( 
    () => JSON.parse(localStorage.getItem('registrationData') || '{}') 
  ); 
 
  const handleConfirm = () => { 
    alert('¡Registro completado exitosamente!'); 
    localStorage.removeItem('registrationData'); // Limpiar datos 
    navigate('/'); 
  }; 
 
  return ( 
    <div> 
      <h2>Confirmación de Registro</h2> 
      <p>Por favor revisa tus datos antes de confirmar:</p> 
       
      <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px' }}> 
        <h3>Información Personal</h3> 
        <p><strong>Nombre:</strong> {registrationData.firstName} 
{registrationData.lastName}</p> 
        <p><strong>Fecha de Nacimiento:</strong> {registrationData.dateOfBirth}</p> 
        <p><strong>Género:</strong> {registrationData.gender}</p> 
         
        <h3>Información de Contacto</h3> 
        <p><strong>Email:</strong> {registrationData.email}</p> 
        <p><strong>Teléfono:</strong> {registrationData.phone}</p> 
        <p><strong>Dirección:</strong> {registrationData.address}</p> 
        <p><strong>Ciudad:</strong> {registrationData.city}</p> 
      </div> 
 
      <div> 
        <button  
          type="button"  
          onClick={() => navigate('/register/contact')} 
          style={{ marginRight: '10px' }} 
        > 
          Anterior 
        </button> 
        <button  
          type="button"  
          onClick={handleConfirm} 
          style={{ marginRight: '10px', backgroundColor: '#28a745', color: 'white' }} 
        > 
          Confirmar Registro 
        </button> 
        <Link to="/"> 
          <button type="button">Cancelar</button> 
        </Link> 
      </div> 
    </div> 
  ); 
}; 
 
export default Confirmation; 
