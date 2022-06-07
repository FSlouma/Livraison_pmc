import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data = [
    {
      Art_code: '001',
      Art_Des: 'sty',
      Quantite: 70,
      lot: 'sarae2',
      Emplacemnet: "e02"
    },
    {
      Art_code: '002',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'seaz21',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '003',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sreter1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '004',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sazex11',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '005',
      Art_Des: 'eau',
      Quantite: 34,
      lot: 'ssq1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '006',
      Art_Des: 'eau',
      Quantite: 47,
      lot: 's47a1',
      Emplacemnet: 'e01'
    }
    , {
      Art_code: '007',
      Art_Des: 'eau',
      Quantite: 88,
      lot: 'saze1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '001',
      Art_Des: 'sty',
      Quantite: 70,
      lot: 'ssds2',
      Emplacemnet: "e02"
    },
    {
      Art_code: '002',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 's<1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '003',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sde^p1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '004',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sghr1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '005',
      Art_Des: 'eau',
      Quantite: 34,
      lot: 'sqran1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '006',
      Art_Des: 'eau',
      Quantite: 47,
      lot: 'shgfh1',
      Emplacemnet: 'e01'
    }
    , {
      Art_code: '007',
      Art_Des: 'eau',
      Quantite: 88,
      lot: 'sghhfg1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '001',
      Art_Des: 'sty',
      Quantite: 70,
      lot: 'sfsz2',
      Emplacemnet: "e02"
    },
    {
      Art_code: '002',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sfghf1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '003',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sghf1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '004',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sytr1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '005',
      Art_Des: 'eau',
      Quantite: 34,
      lot: 'srr1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '006',
      Art_Des: 'eau',
      Quantite: 47,
      lot: 's25r1',
      Emplacemnet: 'e01'
    }
    , {
      Art_code: '007',
      Art_Des: 'eau',
      Quantite: 88,
      lot: 's7r1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '001',
      Art_Des: 'sty',
      Quantite: 70,
      lot: 's192',
      Emplacemnet: "e02"
    },
    {
      Art_code: '002',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 's21',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '003',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 's41',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '004',
      Art_Des: 'eau',
      Quantite: 100,
      lot: 'sfr1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '005',
      Art_Des: 'eau',
      Quantite: 34,
      lot: 'skl1',
      Emplacemnet: 'e01'
    },
    {
      Art_code: '0018',
      Art_Des: 'eau18',
      Quantite: 470,
      lot: 'sk1',
      Emplacemnet: 'eu01'
    }
    , {
      Art_code: '0019',
      Art_Des: 'eau19',
      Quantite: 878,
      lot: 's41',
      Emplacemnet: 'e21'
    },
    {
      Art_code: '020',
      Art_Des: 'eau20',
      Quantite: 70,
      lot: 's11',
      Emplacemnet: 'e011'
    }
  ]
  scanned=[]
  
  constructor() { }
  getall()
  {
    return this.data
  }
  save(newdata)
  {
    return this.data=newdata
  }
  historyadd(dataa)
  {
    return this.scanned.push(dataa)
  }
  gethistory()
  {
    return this.scanned
  }
  newhistory(dataa)
  {
    return this.scanned=dataa
  }
}
