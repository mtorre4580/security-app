const validations = {
    name: /^([a-z]|\.|\ ){3,}$/i,
    lastname: /^$|([a-z]|\.|\ ){3,}$/i,
    date_birdthay: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
    dni: /^[1-9][0-9]{7}$/,
    email: /[a-z|0-9]{3,8}@{1}[a-z|0-9]{1,8}\.(com|ar)$/i,
    country: /^$|[A-Za-z]/,
    phone: /^[0-9]{4}-[0-9]{4}$/,
    comments: /^$|([a-z | 0-9]|\.){3,}$/i,
    team: /^(red|green)$/
};

// Validate defaults props with custom regex
const validator = request => {
  const { name, dni, email, team } = request;
  const statusRequest = {
      errors: {}
  };
  if (name && dni && email && team) {
    Object.keys(request).forEach(name => {
      const regex = validations[name];
      if (!regex.test(request[name])) {
        statusRequest.errors[name] = 'El campo no cumple lo pedido';
      }
    });
  } else {
    const defaultProps = ['name', 'dni', 'email', 'team'];
    defaultProps.forEach(property => statusRequest.errors[property] = `El campo ${property} es obligatorio`);
  }
  return Object.keys(statusRequest.errors).length === 0  ? null : statusRequest;
};

module.exports = validator;