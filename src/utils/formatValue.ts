export const formatValue = (value = 0, currency = 'BRL'): string => {
  return value
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency,
    })
    .replace('$', '$ ');
};

export default formatValue;
