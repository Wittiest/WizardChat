export const updateChatUser = chatUser => (
  $.ajax({
    method: 'PATCH',
    url: `/api/chat_users/${chatUser.id}`,
    data: {
      chat_user: {
        chat_id: chatUser.chatId,
        user_id: chatUser.userId,
        user_nickname: chatUser.userNickname
      }
    }
  })
);

export const deleteChatUser = chatUserId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/chat_users/${chatUserId}`,
  })
);
