import { File } from './file';
import { Node } from './node';

export interface Folder extends Node {
  files: Array<File>;
  folders: Array<Folder>;
}
