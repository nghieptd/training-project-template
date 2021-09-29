import { onNewFile, onSaveNewFile } from './_newFileModal';
import { onNewFolder, onSaveNewFolder } from './_newFolderModal';

const bindNavbarEvents = () => {
  const newFile = document.querySelector('#newDropdownMenu .file');
  if (newFile) {
    newFile.addEventListener('click', onNewFile);
  }
  const newFileSaveBtn = document.querySelector(
    '#newFileModal .modal-dialog .modal-footer .btn-primary',
  );
  if (newFileSaveBtn) {
    newFileSaveBtn.addEventListener('click', onSaveNewFile);
  }

  const newFolder = document.querySelector(
    '#newDropdownMenu .folder',
  );
  if (newFolder) {
    newFolder.addEventListener('click', onNewFolder);
  }
  const newFolderSaveBtn = document.querySelector(
    '#newFolderModal .modal-dialog .modal-footer .btn-primary',
  );
  if (newFolderSaveBtn) {
    newFolderSaveBtn.addEventListener('click', onSaveNewFolder);
  }
};

export default bindNavbarEvents;
