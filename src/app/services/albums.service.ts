import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService{
	constructor(private http: Http){
		console.log("AlbumService Initialized");
	}

	getAlbums(){
		return this.http.get('https://jsonplaceholder.typicode.com/albums').map(res => res.json())
	}
}