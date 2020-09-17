export const formatValue = (value = 0, currency = 'BRL'): string => {
  return value
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency,
    })
    .replace('$', '$ ');
};

export const formatDate = (date: Date): string => {
  return Intl.DateTimeFormat('pt-BR').format(date);
};
