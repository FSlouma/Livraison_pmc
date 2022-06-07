import { Component, HostListener, OnInit } from '@angular/core';
import { ToastController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.page.html',
  styleUrls: ['./hom.page.scss'],
})
export class HomPage implements OnInit {
  @HostListener('document:paste', ['$event']) onPaste(event: any) {
    const paste = event.clipboardData.getData('text');
    event.preventDefault();
    event.stopPropagation();
    setTimeout(() => {
      this.scannedWithPm(paste);
    }, 200);
  }
  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }
  scannedWithPm(paste: any) {
      this.router.navigate(['list']);
      this.router.navigateByUrl('/list');
      this.openToast(paste)
      paste = null
  }
  async openToast(elment) {
    const toast = await this.toastController.create({
      message: elment,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

}
