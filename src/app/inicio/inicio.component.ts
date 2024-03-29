import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './../Services/Service';
import { CommonModule } from '@angular/common';
import { Paciente } from './../interface/Paciente';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FotoPaciente } from '../interface/FotoPaciente';
import { ImagenPaciente } from '../interface/ImagenPaciente';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MenuComponent,
    SidebarComponent,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit, AfterViewInit {
  fechaActual: Date = new Date();
  dia: any = this.fechaActual.getDate();
  mes: any = this.fechaActual.getMonth() + 1; // Los meses empiezan en 0
  año: number = this.fechaActual.getFullYear();
  fechadenacimiento: Date | null;
  telefono: string;
  email: string | null;
  fecha_ultimaconsulta: string | null;
  dataSource = new MatTableDataSource<Paciente>();
  title = 'expedientes-medicos-cancun';
  contenido: string = '';
  fechaFormateada: string;
  nombre: string;
  edad: number;
  listaPacientes: Paciente[];
  displayedColumns: string[] = ['fecha_proximaconsulta', 'nombre', 'sexo','editar'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  images: { src: string; alt: string; }[]=[{src:"",alt:"no hay imagen"}];

  constructor(
    private Service: Service,
    private authService: UserService,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.formatearfecha();
    this.cargarContenidoPacientePrincipal();
    
  }

  ngAfterViewInit() {
    this.cargarListadodePacientes();
  }

  formatearfecha() {
    this.fechaFormateada = `${this.dia < 10 ? '0' + this.dia : this.dia}/${
      this.mes < 10 ? '0' + this.mes : this.mes
    }/${this.año}`;
  }

  cargarContenidoPacientePrincipal() {
    this.Service.getUnico('UsuarioMasactual').subscribe((data: Paciente) => {
      this.nombre = data.nombre;
      let anoNacimiento: Date = new Date(data.fechaDeNacimiento);
      this.edad = this.año - anoNacimiento.getFullYear();
      this.fecha_ultimaconsulta = data.fechaUltimaConsulta;
      this.telefono = data.telefono;
      this.email = data.email;
      this.cargarFotoPaciente(data.clave);
    
    });
  }

  cargarListadodePacientes() {
    this.Service.getList('GetPacientes').subscribe((data: Paciente[]) => {
      this.dataSource = new MatTableDataSource<Paciente>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarElemento(id: number) {
    this.router.navigate(['/expediente_paciente', id]);
    // new File([blobs], "Download.png", { type: "image/jpg" })
    console.log('Editar elemento:', id);
    // Aquí puedes implementar la lógica para editar el elemento
    // Por ejemplo, abrir un diálogo de edición o navegar a una ruta de edición con el ID del elemento
  }

  cargarFotoPaciente(id:number) {
    this.Service.getListFotoPacienteParams('GetFotoPaciente', id).subscribe(
      (data: FotoPaciente[]) => {
        this.images = data.map((img) => ({
          src: `data:image/jpeg;base64,${img.blobData}`,
          alt: img.id
        }));
      }
    );
  } 
  
}
