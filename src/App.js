import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';
import { UserProvider } from './hooks/useUserProfile';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
