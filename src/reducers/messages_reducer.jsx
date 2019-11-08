export default function(state = [], action) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload.messages;
    case 'CREATE_MESSAGE':
      return action.payload.messages;
    default:
      return state;
  }
}
