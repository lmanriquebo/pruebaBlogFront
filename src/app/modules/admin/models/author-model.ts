import { PostModel } from './post-model';

export class AuthorModel {
  'id': string;
  'first_name': string;
  'last_name': string;
  'post': PostModel;
}
