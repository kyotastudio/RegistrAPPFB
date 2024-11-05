import { FirestoreService } from 'src/app/fb/firestore.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/fb/auth.service';
import { Router } from '@angular/router';
import { Classes } from 'src/app/models/classes.models';

@Component({
  selector: 'app-listclassstudent',
  templateUrl: './listclassstudent.page.html',
  styleUrls: ['./listclassstudent.page.scss'],
})
export class ListclassstudentPage implements OnInit{
  classes: Classes[] = [];
  constructor(private authService: AuthService, private router: Router,private firestoreService: FirestoreService) { }

  async ngOnInit() {
    this.classes = await this.firestoreService.getAllClasses(); // Llamada al método
  }

}
