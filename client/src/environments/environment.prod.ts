export const environment = {
  local: false,
  production: true,
  debug_mode: false,
  TWITCH_CHAT_CONFIG: {
    username: '',
    oauth: '',
    channel: '',
    wsUri: 'wss://irc-ws.chat.twitch.tv/',
    bots: ['Nightbot', 'Moobot', 'JIBOT'],
    output_div_id: 'output',
    chat_line_limit: 300
  }
};
