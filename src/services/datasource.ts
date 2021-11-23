import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export class TableDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(data : any): Observable<Element[]> {
      const rows: any[] = [];
      data.forEach((element: any) => rows.push(element, { detailRow: true, element }));
      console.log(rows);
      return of(rows);
    }
  
    disconnect() { 
      
    }
  }