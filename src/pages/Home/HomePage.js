import SearchBar from '../../components/SearchBar/SearchBar';
import Profile from '../../components/Profile/Profile';
import { useUserProfile } from '../../hooks/useUserProfile';

function HomePage() {
  const { user } = useUserProfile();

  return (
    <main className="container min-vh-100 p-3 d-flex flex-column justify-content-center">
      <section className="row">
        <div className="col-12 col-md-10 col-md-8 col-lg-6 m-auto">
          <SearchBar />
        </div>
      </section>
      {user && (
        <section className="row">
          <div className="col-12 col-md-10 col-md-8 col-lg-6 m-auto">
            <Profile />
          </div>
        </section>
      )}
    </main>
  );
}

export default HomePage;
