/** socketBaseUrl */
const socketBase = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
export const socketUrl = `${socketBase}${
  import.meta.env.VITE_APP_WEB_SOCKET === null ||
  import.meta.env.VITE_APP_WEB_SOCKET === undefined ||
  import.meta.env.VITE_APP_WEB_SOCKET === false
    ? window.location.host
    : import.meta.env.VITE_APP_WEB_SOCKET
}${
  import.meta.env.VITE_APP_WEB_SOCKET_BASE
    ? import.meta.env.VITE_APP_WEB_SOCKET_BASE
    : '/ecdigit/api'
}/webmessage/websocket/`;
