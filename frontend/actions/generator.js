export const safeNumberGenerator = (chatUserObject) => {
  let safeNumber = Number.MAX_SAFE_INTEGER;
  while (chatUserObject[safeNumber]) {
    safeNumber--;
  }
  return safeNumber;
};
