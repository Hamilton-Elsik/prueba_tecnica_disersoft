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
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.action = 'Editar';
      /* this.mService.getMaintenance(this.id).subscribe(data => {
        this.maintenance = data;
        this.maintForm.patchValue({
          title: data.title,
          text: data.text,
          creator: data.creator,

        })
      }); */
    }
  }

  addOrEdit() {
    const maintenance: Maintenance = {
      num_ticket: this.maintForm.get('num_ticket')?.value,
      num_bus: this.maintForm.get('num_bus')?.value.toUpperCase(),
      kilometers: this.maintForm.get('kilometers')?.value,
      name_tec: this.maintForm.get('name_tec')?.value.trim(),
      start_date: this.maintForm.get('start_date')?.value,
      end_date: this.maintForm.get('end_date')?.value,
      comment: this.maintForm.get('comment')?.value.trim(),
    };

    console.log(maintenance);

    if (this.maintenance === undefined) {
      /* this.mService.postMaintenance(this.maintenance).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      }); */
    } else {
      /* this.mService.updateMaintenance(this.id, this.maintenance).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      }); */
    }
  }
}
