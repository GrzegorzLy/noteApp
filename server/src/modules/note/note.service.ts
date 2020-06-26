import {Note} from "../../types/index";

export default class NoteService {
   private notes : Array<Note>

   constructor(){
    this.notes = [];
   }

  getById = (id: number) => this.notes.find(note => note.id === id);
  getAll = () => this.notes;

  removeById = (id: number) : Boolean =>  {
    if(this.notes.some(n => n.id === id)){
      this.notes.filter(note => note.id === id);
      return true;
    } else {
      return false;
    }
  };

  add = (text: string) =>  {
    const note = {text, id: this.notes.length + 1, date: new Date().toISOString()};
    this.notes.push(note);
    return note;
  }
}