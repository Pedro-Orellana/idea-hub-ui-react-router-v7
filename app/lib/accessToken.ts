//file that will store the value of the access token
//this is already saved in state, but there are places where state
//cannot be accessed, but the token is needed, that's the reason for this file

let storedAccessToken: string | null = null;

export const setStoredAccessToken = (token: string | null) => {
  storedAccessToken = token;
};

export const getStoredAccessToken = () => {
  return storedAccessToken;
};
