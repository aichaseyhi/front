import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  private initHeaders(): Headers {
    var headers = new Headers();
    let token = localStorage.getItem("token");
    if (token !== null) {
       headers.append('Authorization', token);
    }

    headers.append('Pragma', 'no-cache');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
   }
  getAllProduct():Observable<any>
    {
      let header = this.initHeaders();
     return this.http.get("http://127.0.0.1:8000/api/products",)
    }

    deleteProduct(id:any){
        return  this.http.delete("http://127.0.0.1:8000/api/products/delete/"+id);
       }

    updateProduct(data:any , id:any){
         console.log("data",data);

         return this.http.put("http://127.0.0.1:8000/api/products/update/"+id,data);

       }
    saveProduct(data:any):Observable<any>{
        data.category = [1];
        data.color = [1];
        data.subcategory = []
        return this.http.post("http://127.0.0.1:8000/api/products/save", data);
     }
}
