import { MenuComponent } from './components/menu/menu.component';
import { ExpedientePacienteComponent } from './expediente-paciente/expediente-paciente.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './Services/AuthGuard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';

export const routes: Routes = [
    { 'path': 'login', component: LoginComponent },
    { 'path': 'register', component: RegisterComponent },
    { 'path': 'register', component: RegisterComponent },
    { 'path': 'resetPass', component: ResetPasswordComponent },
    { 'path': 'menu', component: MenuComponent },
    { 'path': 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
    { 'path': 'expediente_paciente/:id', component: ExpedientePacienteComponent,canActivate: [AuthGuard] },
    { 'path': 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { 'path': 'changePass', component: ChangePassComponent, canActivate: [AuthGuard] },
    { 'path': 'tratamientos', component: TratamientosComponent, canActivate: [AuthGuard] },
    
];
