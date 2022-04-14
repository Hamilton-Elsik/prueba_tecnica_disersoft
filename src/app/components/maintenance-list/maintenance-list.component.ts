import { Component, OnInit } from '@angular/core';
import { Maintenance } from 'src/app/interfaces/maintenance.interface';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css'],
})
export class MaintenanceListComponent implements OnInit {
  listMaintenances: Maintenance[] = [
    {
      id: 1,
      num_ticket: 500,
      num_bus: 'KBP098',
      kilometers: 765.3,
      name_tec: 'Carlos Montoya',
      start_date: new Date(),
      end_date: new Date(),
      comment: 'Todo ok',
    },
  ];

  constructor(private mService: MaintenanceService) {}

  ngOnInit(): void {
    this.getMaintenances();
  }

  getMaintenances() {
    console.log('get maintenaces');
    /* this.mService.getListMaintenances().subscribe((data) => {
      this.listMaintenances = data;
    }); */
  }

  deleteMaintenance(id: any) {
    console.log(id);
    /* this.mService.deleteMaintenance(id).subscribe((data) => {
      this.getMaintenances();
    }); */
  }
}
