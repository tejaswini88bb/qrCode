import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

    constructor(private user:UserService, private http:Http, private router:Router, private route: ActivatedRoute) { }
    id:number;
    data:object = {};
    products = [];
    productObj:object = {};
    private headers = new Headers({'Content-Type': 'application/json'});
    
    ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
      });
      this.http.get("http://localhost:3000/products").subscribe(
        (res:Response) => {
            this.products = res.json();
            for(var i = 0; i < this.products.length; i++){
                if(parseInt(this.products[i].id) === this.id){
                   this.data = this.products[i];
                    break;
               }
            }
        }
      );
    }
    updateProduct(product){
        this.productObj = {
            "name": product.name,
            "color": product.color
        };
        const url = `${"http://localhost:3000/products"}/${this.id}`;
        this.http.put(url, JSON.stringify(this.productObj), {headers:this.headers}).toPromise().then(() => {
            this.router.navigate(['/dashboard']);
        });
    }
}
