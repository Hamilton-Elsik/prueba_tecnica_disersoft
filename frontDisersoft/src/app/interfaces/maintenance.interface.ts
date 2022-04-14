export interface Maintenance {
  id?: number;
  num_ticket: number;
  num_bus: string;
  kilometers: number;
  name_tec: string;
  startDate: Date;
  endDate: Date;
  comment: string;
  images?: string | string[];
}
