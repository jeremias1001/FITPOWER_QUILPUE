export const brand = {
  name: "Fit Power Quilpué",
  shortName: "Fit Power",
  whatsapp: "56912345678",
  phone: "+56 9 1234 5678",
  email: "hola@fitpowerquilpue.cl",
  address: "Freire 123, Quilpué"
};

export const venues = [
  { name: "Quilpué Centro", address: "Freire 123", status: "Alta demanda", members: 920 },
  { name: "El Belloto", address: "Av. Los Carrera", status: "Nuevos cupos", members: 740 },
  { name: "Villa Alemana", address: "Centro comercial", status: "Próxima apertura", members: 510 }
];

export const plans = [
  { name: "Start", price: "$19.990", subtitle: "Ideal para comenzar", features: ["Acceso gimnasio", "Clases grupales", "App Fit Power", "Evaluación inicial"] },
  { name: "Power", price: "$29.990", subtitle: "Equilibrio perfecto", popular: true, features: ["Acceso gimnasio", "Clases ilimitadas", "App Fit Power", "Evaluación corporal"] },
  { name: "Elite", price: "$39.990", subtitle: "Rendimiento sin límites", features: ["Acceso 24/7", "Clases ilimitadas", "Plan nutricional", "Asesoría personalizada"] }
];

export const modules = [
  { title: "Multisede", copy: "Control comercial y operativo para las 3 sedes.", stat: "3 sedes" },
  { title: "Agenda online", copy: "Reservas por sede, clase, profesional y horario.", stat: "+120 clases" },
  { title: "Checkout digital", copy: "Planes, pagos y confirmación por WhatsApp.", stat: "24/7" },
  { title: "Roles del equipo", copy: "Admin, recepción, entrenador, nutrición y alumno.", stat: "6 roles" }
];

export const services = [
  { title: "HIIT", copy: "Entrenamientos intensos para quemar y avanzar." },
  { title: "Funcional", copy: "Fuerza, movilidad y rendimiento real." },
  { title: "Personal Training", copy: "Entrenamiento 100% personalizado." }
];

export const roles = [
  { role: "Admin", items: ["Sedes", "Ingresos", "Pagos", "Reportes"] },
  { role: "Recepción", items: ["Check-in", "Pagos", "Inscripciones", "Agenda"] },
  { role: "Entrenador", items: ["Alumnos", "Rutinas", "Asistencia", "Progreso"] },
  { role: "Nutrición", items: ["Pacientes", "Planes", "Controles", "Seguimiento"] },
  { role: "Alumno", items: ["Mi plan", "Reservas", "Pagos", "Clases"] }
];
