export const calculationHelper = (type, value) => {
  console.log('===', type, '===Value', value);
  switch (type) {
    case 'number':
      return handleNumber(value, state);
  }
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return {currentValue: `${value}`};
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  };
};
