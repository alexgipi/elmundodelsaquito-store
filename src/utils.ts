export function formatCurrency(number:number) {
    return number.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    });
}

export function formatDate(dateString:string) { // date: '2023-12-11T05:22:32.977Z'

  const date = new Date(dateString);

  const dateFormat = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC', // Ajusta esto según tu zona horaria
  });

  return dateFormat.format(date);
}

