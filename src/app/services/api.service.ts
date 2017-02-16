import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  // set up some default Headers
  headers: Headers = new Headers({
    'Content-Type': 'application/json',   /*using a json server*/
    Accept: 'application/json'
  });

  // setup url that we'll use for the api
  // default is 3500 because....

  api_url: string = 'http://localhost:3500';

// ok now for some cool stuff

  //constructor comes from ES6 classes. Angular typescript allows us to 
  // use it for dependency injections. This is where we inject other services.
  constructor(private http: Http) { }
  // now we have a this.http inside our ApiService
  // this will have some basic methods around receiving and updating resources
  // such as GET POST DELETE

  // all http methods by default return observables 
  // so use .map because it's an observable
  // we also need to check for any errors and resolve the json ourself (like window.fetch)
  // this will be done on every call (tedious) so make some private methods to help

  // take a response and return it in json format
  private getJson(resp: Response) {
    return resp.json();
  }

  // take a response and return a response related to an error
  // use bracket notation error['response'] so that typescript doesn't freak out
  private checkForError(resp: Response): Response {
    if (resp.status >= 200 && resp.status < 300) {
      return resp; 
    } else {
      const error = new Error(resp.statusText);
      error['response'] = resp;
      console.error(error);
      throw error;
    }
  }
  
  // create GET method and return an observable. 
  // use rxjs as in angular it uses observables by default
  // <any> means we can get some really nice typings
  // the http.get method takes in a url (built from our api_url and path)
  // also pass in the default headers
  // on the map check for errors and catch them if necessary
  // keep the observable working and use its throw error method
  // if all is good, resolve the json

  // use the operators from rxjs

  get(path: string): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, this.headers)
                    .map(this.checkForError)
                    .catch(err => Observable.throw(err))
                    .map(this.getJson)
  }  

  // post also takes in a path, but also data that you want to post 
  // stringify the json, also add the default headers as an object
  post(path: string, body): Observable<any> {
    return this.http.post(
                        `${this.api_url}${path}`, 
                        JSON.stringify(body),
                        { headers: this.headers })
                    .map(this.checkForError)
                    .catch(err => Observable.throw(err))
                    .map(this.getJson)
  } 

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.api_url}${path}`, this.headers)
                    .map(this.checkForError)
                    .catch(err => Observable.throw(err))
                    .map(this.getJson)
  }  

  // create a service for each resource that want to use in app 
  // for now, just have notes resource: creating, deleting, etc
  // this NotesService will interact with http through our ApiService


}
