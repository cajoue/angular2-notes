import { Injectable } from '@angular/core';

// import our ApiService so that can interact with it.
// inject it into the constructor
import { ApiService } from './api.service';

// the NotesService will be pretty lightweight

@Injectable()
export class NotesService {

  path: string = '/notes';

  constructor(private api: ApiService) { }

  // take in a note and post its path and body via the ApiService
  createNote(note) {
    return this.api.post(this.path, note);
  }

  getNotes() {
    return this.api.get(this.path);
  }

  // complete a note (delete it)
  // take in a note - need its id
  // because using a RESTful interface, for the path we want the id
  completeNote(note) {
    return this.api.delete(`${this.path}/${note.id}`);
  }

  // now we have a service to interact with the notes
  // and can use it wherever we need to interact with notes
}
