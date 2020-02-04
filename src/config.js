import { TokenProvider } from '@pusher/chatkit-client-react'

const tokenProvider = new TokenProvider({
    url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bb768bb4-ba9a-4e6f-92f3-aa60f463a731/token',
  });
const instanceLocator = 'v1:us1:bb768bb4-ba9a-4e6f-92f3-aa60f463a731'
const user = 'vnkvp'


  export { tokenProvider, instanceLocator, user }