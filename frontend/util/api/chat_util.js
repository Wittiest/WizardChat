export const fetchChats = () => (
  $.ajax({
    method: 'GET',
    url: `/api/chats`,
  })
);

export const fetchChat = chatId => (
  $.ajax({
    method: 'GET',
    url: `/api/chats/${chatId}`,
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: `/api/chats/${message.chatId}/messages`,
    data: { message }
  })
);
