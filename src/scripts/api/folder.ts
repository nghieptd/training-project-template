import randomSleep from '../utilities/_randomSleep';
import data from './data';

export const fetchContents = async () => {
  await randomSleep();
  return data;
};

export const createFolder = () => {
  // TODO
};

export const deleteFolder = () => {
  // TODO
};

export const editFolder = () => {
  // TODO
};
