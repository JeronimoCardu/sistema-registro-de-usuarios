import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
 
const styles = {
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
  },
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.8em',
    marginTop: '4px'
  }
};

const ContactInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    phone: '',
    address: '',
    city: ''
  });
  // 1. Nuevo estado para guardar los errores de validación
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('registrationData') || '{}');
    if (savedData) {
      setFormData(prev => ({ ...prev, ...savedData }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // 2. Función para validar todos los campos
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido.';
    }

    if (!formData.phone) {
      newErrors.phone = 'El teléfono es obligatorio.';
    } else if (!/^\d{7,}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono debe contener solo números (mínimo 7).';
    }
    
    if (!formData.address) newErrors.address = 'La dirección es obligatoria.';
    if (!formData.city) newErrors.city = 'La ciudad es obligatoria.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      // Si hay errores, los guardamos en el estado y detenemos el envío
      setErrors(formErrors);
      return;
    }
    // Si no hay errores, limpiamos el estado de errores y continuamos
    setErrors({});
    const existingData = JSON.parse(localStorage.getItem('registrationData') || '{}');
    localStorage.setItem('registrationData', JSON.stringify({
      ...existingData,
      ...formData
    }));
    navigate('/register/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} noValidate> 
      <h2>Información de Contacto</h2>

      <div style={styles.formGroup}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.errorMessage}>{errors.email}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.phone && <p style={styles.errorMessage}>{errors.phone}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Dirección:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.address && <p style={styles.errorMessage}>{errors.address}</p>}
      </div>

      <div style={styles.formGroup}>
        <label>Ciudad:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.city && <p style={styles.errorMessage}>{errors.city}</p>}
      </div>

      <div style={styles.buttonGroup}>
        <button type="button" onClick={() => navigate('/register/personal')}>
          Anterior
        </button>
        <button type="submit">Siguiente</button>
      </div>
    </form>
  );
};

export default ContactInfo;