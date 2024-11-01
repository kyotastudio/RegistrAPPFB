import { Injectable } from '@angular/core';
import { Users } from '../models/user.models';
import { Firestore, doc, setDoc, getDoc, collection, getDocs} from '@angular/fire/firestore';
import { Classes } from '../models/classes.models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async createUser(uid: string, userData: Users) {
    const userDocRef = doc(this.firestore, `Users/${uid}`);
    try {
      await setDoc(userDocRef, userData);
    } catch (error) {
    }
  }

  async getUser(uid: string) {
    const userDocRef = doc(this.firestore, `Users/${uid}`);
    const userDoc = await getDoc(userDocRef);
    return userDoc.exists() ? userDoc.data() : null;
  }

  async getClasses(): Promise<Classes[]> { // Retorna un Promise con un arreglo de Class
    const querySnapshot = await getDocs(collection(this.firestore, "Classes"));
    const classes: Classes[] = []; // Especifica que es un arreglo de Class

    querySnapshot.forEach((doc) => {
      classes.push({ id: doc.id, ...doc.data() } as Classes); // Asegúrate de que sea del tipo Class
    });

    return classes; // Retorna las clases obtenidas
  }
}
