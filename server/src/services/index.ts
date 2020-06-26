import { NoteModule } from '../modules';

export default {
  NoteService: new NoteModule.NoteService(),
};

export interface IServices {
  NoteService: NoteModule.NoteService;
}
