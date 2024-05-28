import { OpcionesSidebar } from "../enums/sidebar";


export class Utils {
static  getRouteForOption(option: OpcionesSidebar): string | null {
    const routesMap: Record<OpcionesSidebar, string> = {
      [OpcionesSidebar.Home]: '/inicio',
      [OpcionesSidebar.Profile]: '/profile',
      [OpcionesSidebar.Tratamientos]: '/tratamientos',
      [OpcionesSidebar.AgregarPaciente]:'/expediente_paciente',
      [OpcionesSidebar.ConfigHistorias]:'/configuracion_historias',
      [OpcionesSidebar.NuevoUsuario]:'/register',
      [OpcionesSidebar.Impresion]:'/configuracion_impresion',
      [OpcionesSidebar.ConfiguracionInforme]:'/configuracion_informesoperatorios'
    };

    return routesMap[option] || null;
  }
}