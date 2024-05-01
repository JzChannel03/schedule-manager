function generarNombreAleatorio(): string {
  const nombres = [
    "Ana",
    "Luis",
    "Carlos",
    "Marta",
    "Sofía",
    "Roberto",
    "Patricia",
    "Jorge",
    "Yolanda",
    "David",
  ];
  const apellidos = [
    "Pérez",
    "González",
    "Rodríguez",
    "López",
    "Martínez",
    "Sánchez",
    "Ramírez",
    "Torres",
    "Flores",
    "Hernández",
  ];
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
  return `${nombre} ${apellido}`;
}

function generarCedulaAleatoria(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

function generarAusente(): boolean {
  return Math.random() > 0.5;
}

export interface Persona {
  day: number;
  name: string;
  absent: boolean;
  id: string;
}

export function generarDatos(days: number): Persona[] {
  const datos: Persona[] = [];
  for (let i = 1; i <= days; i++) {
    datos.push({
      day: i,
      name: generarNombreAleatorio(),
      absent: generarAusente(),
      id: generarCedulaAleatoria(),
    });
  }
  return datos;
}
