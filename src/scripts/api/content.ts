import randomSleep from '../utilities/_randomSleep';
import initialData from './data';
import { Node } from '../models/node';
import { File } from '../models/file';

const KEY = 'DB';

const loadLocalStorage = (): any[] => {
  const jsonString = localStorage.getItem(KEY);
  if (!jsonString) {
    return [];
  }

  return JSON.parse(jsonString);
};
const saveLocalStorage = (db: (Node | File)[]) => {
  const mappedDB = db.map(item => ({
    ...item,
    type: 'type' in item ? item.type : 'folder',

    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  const jsonString = JSON.stringify(mappedDB);
  localStorage.setItem(KEY, jsonString);
};

export const loadContents = async (
  folder?: string,
): Promise<Array<Node>> => {
  await randomSleep();

  const jsonString = localStorage.getItem(KEY);
  let data: any[];
  if (jsonString) {
    data = JSON.parse(jsonString);
  } else {
    data = initialData;
  }

  let fetchedItems: any[] = [];
  if (!folder) {
    fetchedItems = data.filter(item => !item.folderId);
  } else {
    const targetFolder = data.find(item => item.name === folder);
    if (targetFolder) {
      fetchedItems = data.filter(
        item =>
          item.folderId > -1 && item.folderId === targetFolder.id,
      );
    }
  }

  const mappedItems = fetchedItems.map(item => {
    if (!item.isFolder) {
      /* File */
      return {
        id: item.id,
        name: item.name,
        isFolder: item.isFolder,
        folderId: item.folderId,
        type: item.type,

        createdAt: new Date(item.createdAt),
        createdBy: item.createdBy,
        updatedAt: new Date(item.updatedAt),
        updatedBy: item.updatedBy,
      };
    }

    /* Node */
    return {
      id: item.id,
      name: item.name,
      isFolder: item.isFolder,
      folderId: item.folderId,

      createdAt: new Date(item.createdAt),
      createdBy: item.createdBy,
      updatedAt: new Date(item.updatedAt),
      updatedBy: item.updatedBy,
    };
  });

  // Data from localStorage is empty - Initialize data
  if (jsonString === null) {
    localStorage.setItem(KEY, JSON.stringify(initialData));
  }
  return mappedItems;
};

export const editContent = () => {
  // TODO
};

export const deleteContent = () => {
  // TODO
};

export const createContent = async (data: Node | File) => {
  await randomSleep();

  const db = loadLocalStorage();

  // TODO Nested folder append
  db.push({
    ...data,
    folderId: null,
    type: 'type' in data ? data.type : 'folder',

    createdAt: data.createdAt.toISOString(),
    updatedAt: data.updatedAt.toISOString(),
  });

  saveLocalStorage(db);
};
