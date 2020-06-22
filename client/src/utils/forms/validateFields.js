const validateField = (value, preValidators, validators) => {
  let isValid = true;
  let validatedValue = value;

  if (preValidators) {
    for (const preValidator of preValidators) {
      validatedValue = preValidator(value);
    }
  }

  if (validators.length === 0) {
    return validatedValue;
  }

  for (const validator of validators) {
    isValid = validator(validatedValue) && isValid;
  }

  if (preValidators) {
    return [validatedValue, isValid];
  }
  return isValid;
};

export default validateField;
