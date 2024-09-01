const TOKEN_KEY = 'token';

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

function removeItem(key: string) {
  localStorage.removeItem(key);
}

function clearLoginStorage() {
  clearToken();
  removeItem('iconUrl');
  removeItem('logoUrl');
}


export { isLogin, getToken, setToken, clearToken, clearLoginStorage, removeItem };
