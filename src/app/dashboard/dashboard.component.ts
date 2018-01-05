import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../user.service';
import { DataSource } from '@angular/cdk/collections';
//import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    id:number;
    username: string;
    products = [];
    private headers = new Headers({'Content-Type': 'application/json'});
    
//    dataSource = new MatTableDataSource(this.products);
    dataSource = new UserDataSource(this.user);
    
    
    
  displayedColumns = ['id','name', 'color', 'action'];
//    @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private user:UserService, private http:Http) { }
/*      applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }*/
  ngOnInit() {
      this.loadData();
      this.username = this.user.username;
  }
  loadData() {
     this.user.fetchData().subscribe(
        data => {
            this.products = data;
        }
    );
  }
    deleteProduct(id){
        if(confirm("Are you Sure???")){
            const url = `${"http://localhost:3000/products"}/${id}`;
            return this.http.delete(url, {headers: this.headers}).toPromise().then(() => {
                this.loadData();
            });
        }
    }
    ngAfterViewInit() {
//        this.dataSource.paginator = this.paginator;
      }

}

export class UserDataSource extends DataSource<any> {
  constructor(private user: UserService) {
    super();
  }
  connect() {
    return this.user.fetchData();
  }
  disconnect() {}
}
