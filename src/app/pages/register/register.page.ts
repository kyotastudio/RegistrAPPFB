import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';
import { FirestoreService } from 'src/app/fb/firestore.service';
import { Users } from 'src/app/models/user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userData: Users = {
    fullname: '',
    email: '',
    typeUser: 0,
  };
  error: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Register page initialized');
  }

  async registerUser() {
    try {
      console.log('Iniciando registro de usuario...');
      const userCredential = await this.authService.register(this.userData.email, this.password);
      const uid = userCredential.user?.uid;

      if (uid) {
        console.log('Usuario registrado en Firebase Authentication, UID:', uid);
        const { fullname, email, typeUser } = this.userData;
        await this.firestoreService.createUser(uid, { fullname, email, typeUser });
        console.log('Datos de usuario guardados en Firestore');
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
      this.error = this.authService.GenerarError(error);
    }
  }
}
