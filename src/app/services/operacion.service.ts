import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  private tareasKey = 'tareas';

  obtenerTareas(): any[] {
    const tareas = localStorage.getItem(this.tareasKey);
    return tareas ? JSON.parse(tareas) : [];
  }

  agregarTarea(tarea: any): void {
    const tareas = this.obtenerTareas();
    tarea.id = new Date().getTime(); // Generar un ID único basado en el tiempo
    tareas.push(tarea);
    this.guardarTareas(tareas);
  }

  eliminarTarea(id: number): void {
    const tareas = this.obtenerTareas().filter(t => t.id !== id);
    this.guardarTareas(tareas);
  }

  obtenerTareaPorId(id: number): any | undefined {
    const tareas = this.obtenerTareas();
    return tareas.find(tarea => tarea.id === id);
  }

  private guardarTareas(tareas: any[]): void {
    localStorage.setItem(this.tareasKey, JSON.stringify(tareas));
  }


  
}