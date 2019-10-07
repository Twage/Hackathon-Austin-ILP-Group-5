import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackagesDbService {

  addPackageToDB (myPackage:any) {
    this.http.post('https://eric-tcs.firebaseio.com/packages/package.json', myPackage).subscribe(mydata=>{
      //console.log("Food/Care Package added to the database.");
      console.log(mydata);
    });
  }

  loadPackagesFromDB() {
    return this.http.get(
      'https://eric-tcs.firebaseio.com/packages/package.json'
    )
    .pipe(
      map(responseData => {
        const postsArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }

  constructor(private http:HttpClient) { }
}
