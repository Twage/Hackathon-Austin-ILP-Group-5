import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseholdsDbService {
  addHouseholdToDB (household:any) {
    this.http.post('https://eric-tcs.firebaseio.com/households/household.json', household).subscribe(mydata=>{
      //console.log("Household added to the database.");
      console.log(mydata);
    });
  }
  
  loadUserCredentialsFromDB() {
    return this.http.get(
      'https://eric-tcs.firebaseio.com/households/household.json'
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

  constructor (private http:HttpClient) {}
}
