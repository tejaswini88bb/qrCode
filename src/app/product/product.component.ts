import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

//    productForm: Formgroup;
//    elementType : 'img' = 'url';
    elementType : 'url' | 'canvas' | 'img' = 'url';
value : string;
    productId: number;
    @ViewChild("tref", {read: ElementRef}) tref: ElementRef;
  constructor(private http:Http) { }
    productObj:object = {};
    confirmationMsg:string = "New Data has been added";
    isAdded:boolean = false;
  ngOnInit() {
  }
    addNewProduct(product){
        this.productObj = {
            "id": product.id,
            "name": product.name,
            "color": product.color
        }
        this.http.post("http://localhost:3000/products/", this.productObj).subscribe((res:Response) => {
            this.isAdded = true;
//            this.productId = JSON.parse(res._body);
//            product.id = this.productId.id;
        });
        this.value = product.name + " " + product.color;
        /*let images = this.tref.nativeElement.getElementsByTagName("img");
        console.log(images);
        console.log(images[0]);*/
    }
    
/*    editProduct(product){
        this.productObj = {
            "id": product.id,
            "name": product.name,
            "color": product.color
        };
        const url = `${"http://localhost:3000/products"}/${product.id}`;
        this.http.put(url, JSON.stringify(this.productObj), {headers:this.headers}).toPromise().then(() => {
            console.log(product);
        });
    }*/
    /*generateQRcode(product){
        console.log(this.productId);
    }*/
}
