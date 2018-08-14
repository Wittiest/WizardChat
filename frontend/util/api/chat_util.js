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
    data: { message: { body: message.body} }
  })
);

export const createChat = chatData => (
  $.ajax({
    method: 'POST',
    url: `/api/chats/`,
    data: { chat_data: chatData }
  })
);

export const updateChat = chat => (
  $.ajax({
    method: 'PATCH',
    url: `/api/chats/${chat.id}`,
    data: { chat }
  })
);
