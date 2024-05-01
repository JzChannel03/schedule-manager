export function getDaysInMonth(year: number, month: number) {
  // Crea una nueva instancia de Date con el yearNow y monthNow dados
  const date = new Date(year, month - 1, 1);
  // Obtiene el último día del monthNow
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // Crea un arreglo con todos los días del monthNow
  return Array.from({ length: days }, (_, i) => i + 1);
}

export function getDaysInMonthWithWeekday(year: number, month: number) {
  const date = new Date(year, month - 1, 1);
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const daysInMonth = [];

  for (let day = 1; day <= days; day++) {
    const currentDate = new Date(year, month - 1, day);
    const weekday = currentDate.getDay();
    const weekdayName = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ][weekday];
    daysInMonth.push({ day, weekday, weekdayName });
  }

  return daysInMonth;
}

export function getDateNow(): {
  dayNow: number;
  monthNow: number;
  yearNow: number;
} {
  const ahora = new Date();

  const dayNow = ahora.getDate();
  const monthNow = ahora.getMonth() + 1;
  const yearNow = ahora.getFullYear();

  return { dayNow, monthNow, yearNow };
}
