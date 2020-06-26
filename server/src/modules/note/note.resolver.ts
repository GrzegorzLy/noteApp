import { ResolverMap, ID, NoteAddInput } from 'src/types';

export const resolver : ResolverMap = {
  Query: {
    note: (_,  {id}: ID, { services: { NoteService } })  => NoteService.getById(id),
    notes: (_, __, { services: { NoteService } }) => NoteService.getAll(),
  },
  Mutation: {
    addNote: (_, {text}: NoteAddInput, { services: { NoteService } }) => NoteService.add(text),
    removeNote: (_, { id }: ID, { services: { NoteService } }) => NoteService.removeById(id),
  },
};
