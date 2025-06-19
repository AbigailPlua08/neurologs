// Mensajes de error
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Este campo es obligatorio.',
  INVALID_EMAIL: 'El correo electrónico no es válido.',
  NETWORK_ERROR: 'Error de conexión. Inténtalo nuevamente.',
  SAVE_ERROR: 'Error al guardar los datos.',
  AUTH_ERROR: 'Error de autenticación.',
  UNKNOWN_ERROR: 'Ha ocurrido un error inesperado.',
  REGISTER_ERROR: 'Error al crear la cuenta',
  PASSWORD_INVALID: "La contraseña debe tener al menos 6 caracteres",
  DATE_ERROR: 'La fecha de nacimiento no puede ser futura',
  
};

// Estados
export const CHILD_PROFILE_STATUS = {
  ACTIVE: 'Activo',
  INACTIVE: 'Inactivo',
};

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  PARENT: 'parent',
  THERAPIST: 'therapist',
};

// Etiquetas comunes de botones
export const BUTTON_LABELS = {
  SAVE: 'Guardar',
  CANCEL: 'Cancelar',
  DELETE: 'Eliminar',
  UPDATE: 'Actualizar',
};

// Literales de formulario
export const FORM_LABELS = {
  CHILD_NAME: 'Nombre del niño',
  BIRTHDATE: 'Fecha de nacimiento',
  GENDER: 'Género',
  EMAIL: 'Correo electrónico',
  PASSWORD: 'Contraseña',
};

// Validaciones
export const VALIDATION_RULES = {
  MAX_CHILD_NAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 100,
  PASSWORD_MIN_LENGTH: 8,
};

// Otros strings repetidos
export const APP_CONFIG = {
  DEFAULT_LANGUAGE: 'es',
  DATE_FORMAT: 'DD/MM/YYYY',
  TIMEZONE: 'America/Guayaquil',
};
