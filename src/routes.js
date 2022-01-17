import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import ReposPage from './pages/Repos/ReposPage';
import FollowersPage from './pages/Followers/FollowersPage';
import StarredReposPage from './pages/StarredRepos/StarredReposPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repos" element={<ReposPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/starred" element={<StarredReposPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
