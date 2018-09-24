export function fetchMessage() {
  return {
    type: 'layout/message',
    payload: {
    },
  };
}

export function fetchNotification() {
  return {
    type: 'layout/notification',
    payload: {},
  };
}

export function inputChange(evt) {
  return {
    type: 'layout/stateWillUpdate',
    payload: {
      searchValue: evt.target.value,
    },
  };
}
