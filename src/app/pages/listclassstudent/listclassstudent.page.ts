import { FirestoreService } from 'src/app/fb/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/fb/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listclassstudent',
  templateUrl: './listclassstudent.page.html',
  styleUrls: ['./listclassstudent.page.scss'],
})
export class ListclassstudentPage implements OnInit{
  classes: any = null;
  FirestoreService: any;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.classes = await this.FirestoreService.getClasses(); // Llama al método para obtener las clases//-
    console.log(this.classes); // Imprime las clases en la consola
  }
}
