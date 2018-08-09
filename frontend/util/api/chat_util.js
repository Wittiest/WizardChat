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
