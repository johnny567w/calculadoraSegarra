import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionService } from '../../services/operacion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  tareas: any[] = [];
  nuevaTarea: any = {
    nombre: '',
    responsable: '',
    fechaLimite: '',
    duracion: '',
    descripcion: '',
    estado: '',
    prioridad: 1
  };

  constructor(private detalleTareaService: OperacionService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareas = this.detalleTareaService.obtenerTareas().sort((a, b) => a.prioridad - b.prioridad);
  }

  agregarTarea(): void {

    this.detalleTareaService.agregarTarea(this.nuevaTarea);
    this.cargarTareas(); // Recargar la lista de tareas desde el almacenamiento
    this.nuevaTarea = { nombre: '', responsable: '', fechaLimite: '', duracion: '', descripcion: '', estado: '', prioridad: 1 };
  }

  eliminarTarea(id: number): void {
    this.detalleTareaService.eliminarTarea(id);
    this.cargarTareas(); // Recargar la lista de tareas después de eliminar
  }



  alternarDescripcion(tarea: any): void {
    tarea.mostrarDescripcion = !tarea.mostrarDescripcion;
  }
}