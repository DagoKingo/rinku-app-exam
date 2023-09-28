interface IPago {
  id?: number;
  mes?: string;
  id_trabajador?: number;
  pago_mensual?: number;
  retencion?: number;
  vale_despensa?: number;
  bono_entregas?: number;
  pago_bono_horas?: number;
  pago_bruto?: number;
  pago_neto?: number;
}

export default IPago;
