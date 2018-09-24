
export function stateWillUpdate(payload) {
  return {
    type: 'index/stateWillUpdate',
    payload: {
      ...payload,
    },
  };
}

export function onApplicationMoreButtonClick(evt) {
  evt.preventDefault();
  return {
    type: 'index/applicationModalWillShow',
    payload: {
    },
  };
}

export function onApplicationModalCancel() {
  return {
    type: 'index/stateWillUpdate',
    payload: {
      showApplicationModal: false,
    },
  };
}

export function toggleEditMode(editMode) {
  return {
    type: 'index/stateWillUpdate',
    payload: {
      editMode,
    },
  };
}

export function applicationRemovButtonClick(id) {
  return {
    type: 'index/removeUserApplication',
    payload: {
      id,
    },
  };
}

export function applicationAddButtonClick(record) {
  return {
    type: 'index/addUserApplication',
    payload: {
      record,
    },
  };
}
export function openPerInfo() {
  return {
    type: 'index/openPerInfo',
  };
}
export function hiddenPerInfoModal() {
  return {
    type: 'index/hiddenPerInfoModal',
    payload: {
      isShow: false,
    },
  };
}
export function salaryButtonClick() {
  return {
    type: 'index/fetchSalary',
    payload: {
    },
  };
}
export function markingButtonClick() {
  return {
    type: 'index/fetchMarking',
    payload: {
    },
  };
}
export function onPerInfoTabsChanges(activeKey) {
  return {
    type: 'index/onPerInfoTabsChanges',
    payload: {
      activeKey,
    },
  };
}
export function viewPolicy({ policyId }) {
  return {
    type: 'index/viewPolicy',
    payload: {
      policyId,
    },
  };
}
