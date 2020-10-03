import { AuthorModel } from './author-model';

export class PostModel {
  'id': string;
  'title': string;
  'content': string;
  'image': any;
  'author_id': number;
  'author': AuthorModel;
}
