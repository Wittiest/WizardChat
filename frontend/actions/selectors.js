export const firstMessageSelector = (messages, id) => {
  if (id === Number.MAX_SAFE_INTEGER) {
    return ({body: "", authorId: -1});
  }
  return (messages[id]);
};

// TODO Insertion sort time complexity up to n^2, could be improved

export const selectChatsInOrder = (chats) => {
  const orderedChats = [];
  for (let i in chats) {
    const mostRecentMessageId = chats[i].firstMessageId;
    let inserted = false;
    for (let j = 0; j < orderedChats.length; j++) {
      const othermostRecentMessageId = orderedChats[j].firstMessageId;
      if (mostRecentMessageId > othermostRecentMessageId) {
        orderedChats.splice(j, 0, chats[i]);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      orderedChats.push(chats[i]);
    }
  }
  return orderedChats;
};

export const selectNewCurrentChat = (chats, excludeChatId) => {
  const orderedChats = selectChatsInOrder(chats);
  let deleteIndex = null;
  for (let i = 0; i < orderedChats.length; i++) {
    if (orderedChats[i].chatId === excludeChatId) {
      deleteIndex = i;
    }
  }
  if (deleteIndex) { delete orderedChats[deleteIndex];}
  return orderedChats[0];
};

export const selectChatMessages = (chatId, messages) => {
  const messagesInChat = [];
  Object.values(messages).forEach((msg)=>{
    if (msg.chatId === chatId) {
      messagesInChat.push(msg);
    }
  });
  return messagesInChat;
};

export const selectSearchResultUsers = (users, userChats) => {
  const matchingUsers = {};
  userChats.forEach((membership)=>{
    if (membership.chatId === -2) {
      let userId = membership.userId;
      matchingUsers[userId] = users[membership.userId];
    }
  });
  userChats.forEach((membership)=>{
    if (membership.chatId === -1) {
      let userId = membership.userId;
      delete matchingUsers[userId];
    }
  });
  return Object.values(matchingUsers);
};

export const usersInChat = (chatId, userChats, users) => {
  let matchingUsers = [];
  userChats.forEach((membership)=>{
    if (membership.chatId === chatId) {
      matchingUsers.push(users[membership.userId]);
    }
  });
  return matchingUsers;
} ;

export const userIsInDM = (chats, userChats, userId) => {
  for (let i = 0; i < userChats.length; i++) {
    if (userChats[i].userId === userId && userChats[i].chatId !== -1 &&
      userChats[i].chatId !== -2 && !chats[userChats[i].chatId].isGroupChat) {
        return userChats[i].chatId;
    }
  }
  return false;
};

export const selectChatSearchMembershipIds = (userChats) => {
  const searchMembershipIds = [];
  userChats.forEach((membership)=>{
    if (membership.chatId === -2 || membership.chatId === -1) {
      searchMembershipIds.push(membership.id);
    }
  });
  return searchMembershipIds;
};

export const selectSelectedGroupMemberIds = (userChats) => {
  const searchMembershipIds = [];
  userChats.forEach((membership)=>{
    if (membership.chatId === -1) {
      searchMembershipIds.push(membership.userId);
    }
  });
  return searchMembershipIds;
};

export const selectNullChatMembershipId = (userId, userChats) => {
  for (let i in userChats) {
    if (userChats[i].userId === userId && userChats[i].chatId === -1) {
      return userChats[i].id;
    }
  }
  return null;
};

export const selectChatsByQuery = (query, chats) => {
  const selectedChats = [];
  const chatQuery = query.toLowerCase();
  chats.forEach((chat)=>{
    const chatName = chat.name.toLowerCase();
    if (chatName.includes(chatQuery)) {
      selectedChats.push(chat);
    }
  });
  return selectedChats;
};

export const selectChatUser = (userChats, userId, chatId) => {
  for (let i = 0; i < userChats.length; i++) {
    if (userChats[i].chatId === chatId && userChats[i].userId === userId) {
      return userChats[i];
    }
  }
  return null;
};

export const getUserNickname = (userChats, userId, chatId) => {
  const chatUser = selectChatUser(userChats, userId, chatId);
  return (chatUser) ? (chatUser.userNickname) : null;
};
