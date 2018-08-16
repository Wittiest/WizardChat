export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user,
    contentType: false,
    processData: false
  })
);

export const logout = userId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/session`,
  })
);
