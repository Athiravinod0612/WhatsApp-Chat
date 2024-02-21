import './App.css';
import Messenger from './conponents/messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId = "146605276128-tl66r29893g2mfe64jctsarvogpebbdh.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
