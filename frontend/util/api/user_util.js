export const searchUsers = (query) => (
  $.ajax({
    method: 'POST',
    url: `/api/user_search/`,
    data: { query }
  })
);
