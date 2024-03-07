export const getAllChatByContact = (chatData) => {
  const chatByContactObj = {};
  chatData?.forEach((item) => {
    if (!chatByContactObj[item.contactName]) {
      chatByContactObj[item.contactName] = [];
    }
    chatByContactObj[item.contactName].push({
      id: item.id,
      status: item.status,
      time: item.time,
      message: item.message,
    });
    chatByContactObj[item.contactName].sort((a, b) => {
      return a.time - b.time;
    });
  });

  return chatByContactObj;
};
