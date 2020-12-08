import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import {ProductService} from '../product.service';
@Component({
    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:["./ptab.component.css"]
})



export class PtabComponent implements OnInit{
    parr:Product[];
    pob:Product;
    flag=false;
 

    constructor(private pservice:ProductService){
    }
    ngOnInit(){
        this.parr=this.pservice.getAllProduct();
    }
    updateProduct(p:Product){
        this.flag=true;
        this.pob=p;
    }
    deleteProduct(p:Product){
        this.pservice.deleteProduct(p);
    }      
    displayform(){
        this.flag=true;
    }
    
}