import { Injectable } from '@angular/core';
import{Product} from './product.model';
@Injectable()
export class ProductService{

    parr=[new Product(10,"Parle-G",10),
          new Product(11,"Coca cola",20),
          new Product(12,"Chocolate",40),
          new Product(13,"Nuts",20)];

    getAllProduct():Product[]{
        return this.parr;
    }


    addProduct(p:Product){
        this.parr.push(p);
    }
    updateProduct(p:Product){
        for(let i=0;i<this.parr.length;i++){
            if(this.parr[i].pid==p.pid){
                this.parr[i].pname=p.pname;
                this.parr[i].price=p.price;
                break;
            }
        }
    }
    deleteProduct(p:Product){
        for(var i=0;i<this.parr.length;i++){
           // console.log(i);
            if(this.parr[i].pid==p.pid){
                console.log(this.parr[i].pid+"----"+p.pid);
                console.log(i);
                this.parr.splice(i,1);
                return 0;
            }
        }
    }
}