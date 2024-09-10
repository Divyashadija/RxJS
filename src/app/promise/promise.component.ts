import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent {
  promiseVal: any = {};
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
    status: 'Success'
  };
  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Grey',
    status: 'Success'
  };
  notAvil = {
    brand: 'Not Available',
    status: 'Failed'
  }

  dellAvailable(){
    return true;
  }
  hpAvailable(){
    return false;
  }
  
  ngOnInit(): void{
    let buyLaptop = new Promise((resolve, reject) => {
      if(this.dellAvailable()){
        return setTimeout(() => {
          // resolve("Dell is Purchased!");
          resolve(this.dell)
        }, 3000);
      }else if(this.hpAvailable()){
        return setTimeout(() => {
          // resolve("HP is Purchased!");
          resolve(this.hp);
        }, 3000);
      }else{
        return setTimeout(() => {
          // reject("Laptop is not available on store!");
          reject(this.notAvil);
        }, 3000); 
      }
    });

    buyLaptop.then(res=>{
      this.promiseVal = res;
    }).catch(res=>{
      this.promiseVal = res;
    })
  }

}
