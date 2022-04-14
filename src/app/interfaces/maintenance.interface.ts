export interface Maintenance {
  id?: number;
  num_ticket: number;
  num_bus: string;
  kilometers: number;
  name_tec: string;
  start_date: Date;
  end_date: Date;
  comment: string;
  images?: string[];
}
