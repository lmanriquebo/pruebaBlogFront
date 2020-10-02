import { PostModel } from './post-model';

export class AuthorModel {
  'id': string;
  'name': string;
  'last_name': string;
  'post': PostModel;
}
