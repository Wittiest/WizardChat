export const searchUsers = (query) => (
  $.ajax({
    method: 'POST',
    url: `/api/user_search/`,
    data: { query }
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/user/`,
    data: user,
    contentType: false,
    processData: false
  })
);
