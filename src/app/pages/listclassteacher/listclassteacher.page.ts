import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonModal, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';
import { FirestoreService } from 'src/app/fb/firestore.service';
import { Classes } from 'src/app/models/classes.models';
import QRious from 'qrious';

@Component({
  selector: 'app-listclassteacher',
  templateUrl: './listclassteacher.page.html',
  styleUrls: ['./listclassteacher.page.scss'],
})
export class ListclassteacherPage implements OnInit {
  loading: boolean = false;
  classes: Classes[] = [];
  qrData: string = '';
  showQRCode: boolean = false;
  username: string = '';
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    private animationCtrl: AnimationController,
    private authService: AuthService,
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  async ngOnInit() {
    this.classes = await this.firestoreService.getAllClasses();
    this.authService.username$.subscribe((username: string) => {
      this.username = username;
    });
  }

  generarQR(id: string) {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const día = String(fechaActual.getDate()).padStart(2, '0');

    const fechaHora = `${año}-${mes}-${día}`;
    this.qrData = `http://localhost:8100/asistencia/${id}/${this.username}/${fechaHora}`;
    this.showQRCode = true;

    setTimeout(() => {
      this.createQR();
    }, 0);
  }

  createQR() {
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: this.qrData,
      size: 150,
      level: 'M'
    });
  }

  closeModal() {
    this.modal.dismiss();
    this.showQRCode = false;
  }
}
