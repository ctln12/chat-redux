const BASE_URL = 'https://wagon-chat.herokuapp.com';

export function setMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: 'SET_MESSAGES',
    payload: promise // will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'MESSAGE_POSTED',
    payload: promise // will be resolved by redux-promise
  };
}

export function setSelectedChannel() {
  return {
    type: 'SELECTED_CHANNEL'
  };
}
