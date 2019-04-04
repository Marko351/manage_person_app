module.exports = function validatePersonInputs(data) {
  const errors = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters!';
  }

  if (!data.surname || data.surname.trim().length < 3) {
    errors.surname = 'Surname must be at least 3 characters!';
  }

  if (!data.city) {
    errors.city = 'Please enter in which city you live!';
  }

  if (!data.address) {
    errors.address = 'Please enter your address!';
  }

  if (!data.phone && data.name.trim().length < 6) {
    errors.phone = 'Please enter valid phone number!';
  }

  return errors;
}


