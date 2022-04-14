import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maintenance } from 'src/app/interfaces/maintenance.interface';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-view-maintenance',
  templateUrl: './view-maintenance.component.html',
  styleUrls: ['./view-maintenance.component.css'],
})
export class ViewMaintenanceComponent implements OnInit {
  id: number;
  maintenance: Maintenance | undefined;

  constructor(
    private aRoute: ActivatedRoute,
    private mService: MaintenanceService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.mService.getMaintenance(this.id).subscribe(data => {
      console.log(data);
      this.maintenance = data;
    });
  }
}
