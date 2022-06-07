import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from 'src/app/service/service.service';
import { ToastController } from "@ionic/angular";
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @HostListener('document:paste', ['$event']) onPaste(event: any) {
    const paste = event.clipboardData.getData('text');
    event.preventDefault();
    event.stopPropagation();
    setTimeout(() => {
      this.scannedWithPm(paste);
    }, 200);
  }
  isModalOpen = false
  qtehtml
  qtechange
  ModalHistoryOpen = false
  data
  datascanned
  parmData = {
    Art_code: '',
    lot: '',
    Quantite: ''
  }
  isScanned = true
  isenabled = true
  constructor(private service: ServiceService, private toastController: ToastController) {
    this.data = this.service.getall()
  }

  ngOnInit() {
    this.data = this.service.getall()
  }
  openmodal() {
    this.ModalHistoryOpen = true
    this.datascanned = this.service.gethistory()
  }
  rouetparms() {
    this.isModalOpen = true;
  }

  //remove from history
  removeFromHistory(v) {
    this.data.forEach(element => {
      if (element.Art_code == v.code &&
        element.lot == v.lot)
        element.Quantite += parseInt(v.qte)
    });
    let el = false
    let obj = []
    this.datascanned.forEach(elementScanned => {
      if (elementScanned.code == v.code &&
        elementScanned.lot == v.lot &&
        elementScanned.qte == v.qte) {
        el = true
        console.log("in");
      }
      if (el == false) {
        obj.push(elementScanned)
      }
      if (el == true)
        el = false
    });
    console.log(obj);
    this.service.newhistory(obj)
    this.datascanned = this.service.gethistory()
    obj = []
    this.service.save(this.data)
  }

  scannedWithPm(paste: any) {
    if (this.isModalOpen == false) {
      let chaine = paste
      //split scan
      let codeSplited = chaine.slice(0, chaine.indexOf(";"));
      let test = false
      chaine = chaine.substring(chaine.indexOf(";") + 1, chaine.length)
      let lotSplited = chaine.slice(0, chaine.indexOf(";"));
      chaine = chaine.substring(chaine.indexOf(";") + 1, chaine.length)
      let qteSplited = chaine.slice(0, chaine.length - 1);
      // update data
      if (qteSplited != null && lotSplited != null && codeSplited != null) {
        let scanned = false
        this.datascanned = this.service.gethistory()
        for (let x = 0; x <= this.datascanned.length; x++) {
          if (this.datascanned[x]) {
            if (this.datascanned[x].code == codeSplited &&
              this.datascanned[x].lot == lotSplited &&
              this.datascanned[x].qte == qteSplited) {
              scanned = true
            }
          }
        }
        for (let i = 0; i <= this.data.length; i++) {
          if (this.data[i]) {
            if (this.data[i].Art_code == codeSplited &&
              this.data[i].lot == lotSplited && scanned == false) {
              console.log(this.data[i]);
              if (this.data[i].Quantite > 0) {
                if (this.data[i].Quantite - parseInt(qteSplited) >= 0) {
                  this.data[i].Quantite -= parseInt(qteSplited)
                  this.service.save(this.data)
                  this.data = this.service.getall()
                  test = true
                  let obj = {
                    code: codeSplited,
                    lot: lotSplited,
                    qte: qteSplited
                  }
                  this.service.historyadd(obj)
                  this.openToastupdate("Modification avec succes")
                  break;
                }
                else {
                  this.openToastqte()
                }
              }
            }
          }
          else {
            this.openToastDangerScanned(codeSplited + ";" + lotSplited + ";" + qteSplited + ";")
          }
        }
        this.ngOnInit()
        if (test != true && scanned == false) {
          this.openToastDanger(codeSplited + lotSplited + qteSplited)
        }
      }
      paste = ""
      this.service.save(this.data)
      this.data = this.service.getall()
      console.log(this.service.gethistory());
    }
    else {
      this.isScanned = false
      let chaine = paste
      //split scan
      let codeSplited = chaine.slice(0, chaine.indexOf(";"));
      let test = false
      chaine = chaine.substring(chaine.indexOf(";") + 1, chaine.length)
      let lotSplited = chaine.slice(0, chaine.indexOf(";"));
      chaine = chaine.substring(chaine.indexOf(";") + 1, chaine.length)
      let qteSplited = chaine.slice(0, chaine.length - 1);

      //test exist in scanned
      this.datascanned=this.service.gethistory()
      let exist=false
      if (qteSplited != null && lotSplited != null && codeSplited != null) {
        let scanned = false
        this.datascanned = this.service.gethistory()
        for (let x = 0; x <= this.datascanned.length; x++) {
          if (this.datascanned[x]) {
            if (this.datascanned[x].code == codeSplited &&
              this.datascanned[x].lot == lotSplited &&
              this.datascanned[x].qte == qteSplited) {
                exist = true
            }
          }
        }
      }
      // update data
      if (qteSplited != null && lotSplited != null && codeSplited != null && exist==false ) {
        this.parmData.Art_code = codeSplited
        this.parmData.Quantite = qteSplited
        this.parmData.lot = lotSplited
      }
    }
  }

  fetchdata(parmData) {
    this.isenabled = true
    this.qtechange = parseInt(((<HTMLInputElement>document.getElementById("quantite")).value))
    this.data.forEach(element => {
      if (element.Art_code == parmData.Art_code &&
        element.lot == parmData.lot) {
        if (element.Quantite > 0) {
          if (element.Quantite - this.qtechange >= 0) {
            element.Quantite -= this.qtechange
            this.service.historyadd({ code: parmData.Art_code, lot: parmData.lot, qte: this.qtechange })
          }
        }
        else {
          this.openToastqte()
        }
      }

    });
    this.service.save(this.data)
    this.data = null
    this.data = this.service.getall()
    this.isModalOpen = false;
    this.parmData = {
      Art_code: '',
      lot: '',
      Quantite: ''
    }
    this.qtechange = ""
    this.isScanned = true
    this.qtechange = null;
    (<HTMLInputElement>document.getElementById("quantite")).value = ""

  }

  close() {
    this.isModalOpen = false;
    ((<HTMLInputElement>document.getElementById("quantite")).value) = "";
    this.service.save(this.data)
    this.data = null
    this.data = this.service.getall()
  }
  closehistory() {
    this.ModalHistoryOpen = false
  }

  async openToastupdate(elment) {
    const toast = await this.toastController.create({
      message: elment,
      duration: 2000,
      color: 'success',
      cssClass: 'toast'
    });
    toast.present();
  }
  async openToastDanger(elment) {
    const toast = await this.toastController.create({
      message: elment + ' n existe pas',
      duration: 2000,
      color: 'danger',
      cssClass: 'toast'
    });
    toast.present();
  }
  async openToastDangerScanned(elment) {
    const toast = await this.toastController.create({
      message: elment + ' déja scanné',
      duration: 2000,
      color: 'danger',
      cssClass: 'toast'
    });
    toast.present();
  }
  async openToastqte() {
    const toast = await this.toastController.create({
      message: ' Quantité n existe pas',
      duration: 2000,
      color: 'danger',
      cssClass: 'toast'
    });
    toast.present();
  }
}

