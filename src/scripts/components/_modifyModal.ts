const toggleModifyModal = (state: boolean, id?: string) => {
  const modifyModal = $('#modifyModal') as any;
  if (modifyModal) {
    modifyModal.modal(state ? 'show' : 'hide');
    if (state) {
      modifyModal.modal('show');
      modifyModal.attr('data-content-id', id);
    } else {
      modifyModal.modal('hide');
      modifyModal.removeAttr('data-content-id');
    }
  }
};

export const onModifyContent = (id: string) => {
  toggleModifyModal(true, id);
};

export const onSaveModifyContent = () => {
  toggleModifyModal(false);
};

export const onCancelModifyContent = () => {
  toggleModifyModal(false);
};
