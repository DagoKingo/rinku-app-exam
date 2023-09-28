interface ITrabajador {
  id?: number;
  nombre?: string;
  numero?: string;
  id_tipo?: number;
  rol?: string;
  sueldo_base_x_hora?: number;
  horas_x_dia?: number;
  dias_x_semana?: number;
  bono_x_entrega?: number;
  bono_x_hora?: number;
  porcentaje_vale_despensa?: number;
}

export default ITrabajador;
