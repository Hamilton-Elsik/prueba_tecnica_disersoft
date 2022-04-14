import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from 'src/app/interfaces/maintenance.interface';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-add-edit-maintenance',
  templateUrl: './add-edit-maintenance.component.html',
  styleUrls: ['./add-edit-maintenance.component.css'],
})
export class AddEditMaintenanceComponent implements OnInit {
  id = 0;
  action = 'Agregar';

  maintForm: FormGroup;
  maintenance: Maintenance | undefined;

  constructor(
    private router: Router,
    private fBuilder: FormBuilder,
    private aRoute: ActivatedRoute,
    private mService: MaintenanceService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;

    this.maintForm = this.fBuilder.group({
      num_ticket: [0, Validators.required],
      num_bus: ['', Validators.required],
      kilometers: [0, Validators.required],
      name_tec: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.action = 'Editar';
      this.mService.getMaintenance(this.id).subscribe(data => {
        this.maintenance = data;
        this.maintForm.patchValue({
          num_ticket: this.maintenance?.num_ticket,
          num_bus: this.maintenance?.num_bus,
          kilometers: this.maintenance?.kilometers,
          name_tec: this.maintenance?.name_tec,
          startDate: this.maintenance?.startDate,
          endDate: this.maintenance?.endDate,
          comment: this.maintenance?.comment,
        })
      });
    }
  }

  addOrEdit() {
    const maintenance: Maintenance = {
      num_ticket: this.maintForm.get('num_ticket')?.value,
      num_bus: this.maintForm.get('num_bus')?.value.toUpperCase(),
      kilometers: this.maintForm.get('kilometers')?.value,
      name_tec: this.maintForm.get('name_tec')?.value.trim(),
      startDate: this.maintForm.get('startDate')?.value,
      endDate: this.maintForm.get('endDate')?.value,
      comment: this.maintForm.get('comment')?.value.trim(),
      images: ''
    };

    console.log(maintenance);

    if (this.maintenance === undefined) {
      this.mService.postMaintenance(maintenance).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    } else {
      maintenance.id = this.maintenance.id;
      this.mService.updateMaintenance(this.id, maintenance).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }
  }
}
