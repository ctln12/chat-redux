// TODO: add and export your own actions
export function setMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}
