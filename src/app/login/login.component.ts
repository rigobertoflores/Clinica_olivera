import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { login } from '../interface/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public rememberMe: boolean = false;
  userService: any;
  loginform: any;
  

  constructor(private authService: UserService,private router: Router) {}
 
  ngOnInit(): void {
  this.cargarFormulario();
  }

  cargarFormulario() { 
    this.loginform = new FormGroup({
      email: new FormControl(''),
      pass:new FormControl('')
    });
  }

  login() {
    this.authService.login(this.loginform.get('email')?.value,this.loginform.get('pass')?.value)
    .then((response :any) => {
      console.log('Login successful', response);
      this.router.navigate(['/inicio']);
    })
    .catch((error: any) => console.log("Error en login con firebase",error));
     
  }

  
  onClickGoogle() {
    this.authService.loginWithGoogle()
      .then((response: any) => {
        console.log("Respuesta login con google",response);
        this.router.navigate(['/inicio']);
      })
      .catch((error: any) => console.log("Error en login con google",error));
  }

  register() {    
        this.router.navigate(['/register']);
  }

  resetPassword() {
    this.router.navigate(['/resetPass']);
}

}
