import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { Propietario } from 'src/app/models/propietario';
import { PropietariosService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-Propietario-list',
  templateUrl: './Propietario-list.component.html',
  styleUrls: ['./Propietario-list.component.css']
})
export class PropietarioListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  Propietarios : Propietario[];
  @Output() PropietarioToEdit = new EventEmitter<Propietario>();
  @Input() flagToReload;
  @Output() reloadComplete = new EventEmitter<Boolean>();

  constructor(private PropietarioService:PropietariosService) { }

  ngOnInit(): void {
    this.list();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      if(this.flagToReload){
        this.list();
      }
    }
  }


  update(a:Propietario) :void {
    console.log(a);
    this.PropietarioToEdit.emit(a);
  }

  delete(a:Propietario) :void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.Nombres + " " + a.Apellidos + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.PropietarioService.delete(a).subscribe(
          result => console.log(result)
        )
      }
    })
  }



  list() : void {
    this.PropietarioService.list().subscribe(result => {      
      this.Propietarios = result;
      this.reloadComplete.emit(true);
    });
  }

  

}
