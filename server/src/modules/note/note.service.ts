import uid from 'uid';
import { Note } from '../../types/index';

export default class NoteService {
  private notes: Array<Note>;

  constructor() {
    this.notes = [];
  }

  getById = (id: string) => this.notes.find((note) => note.id === id);
  getAll = () => this.notes;

  removeById = (id: string): Boolean => {
    if (this.notes.some((n) => n.id === id)) {
      this.notes = this.notes.filter((note) => note.id !== id);
      return true;
    } else {
      return false;
    }
  };

  add = (text: string) => {
    const id = uid();
    const note = { text, id, date: new Date().toLocaleDateString() };
    this.notes.push(note);
    return note;
  };
}
