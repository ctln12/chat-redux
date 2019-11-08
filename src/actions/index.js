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
  // TODO
  const body = { author, content };
  fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  const newMessageList = setMessages();

  return {
    type: 'CREATE_MESSAGE',
    payload: newMessageList.payload
  };
}

export function setChannels(channels) {
  return {
    type: 'SET_CHANNELS',
    payload: channels
  };
}

export function setSelectedChannel() {
  return {
    type: 'SELECTED_CHANNEL'
  };
}
