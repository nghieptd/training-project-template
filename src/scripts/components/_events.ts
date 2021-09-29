import {
  onCancelModifyContent,
  onSaveModifyContent,
  onDeleteContent,
} from './_modifyModal';
import { onNewFile, onSaveNewFile } from './_newFileModal';
import { onNewFolder, onSaveNewFolder } from './_newFolderModal';

const bindEvents = () => {
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

  const modifyContentSaveBtn = document.querySelector(
    '#modifyModal .modal-dialog .modal-footer .btn-primary',
  );
  if (modifyContentSaveBtn) {
    modifyContentSaveBtn.addEventListener(
      'click',
      onSaveModifyContent,
    );
  }
  const modifyContentCancelBtn = document.querySelector(
    '#modifyModal .modal-dialog .modal-footer .btn-secondary',
  );
  if (modifyContentCancelBtn) {
    modifyContentCancelBtn.addEventListener(
      'click',
      onCancelModifyContent,
    );
  }
  const modifyContentDeleteBtn = document.querySelector(
    '#modifyModal .modal-dialog .modal-footer .btn-danger',
  );
  if (modifyContentDeleteBtn) {
    modifyContentDeleteBtn.addEventListener('click', onDeleteContent);
  }
};

export default bindEvents;
