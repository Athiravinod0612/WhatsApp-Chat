import './App.css';
import AccountProvider from './conponents/Context/AccountProvider';
import Messenger from './conponents/messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId = "146605276128-tl66r29893g2mfe64jctsarvogpebbdh.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
