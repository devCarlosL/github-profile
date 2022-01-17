/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

import useAsync from '../../hooks/useAsync';
import { getUser } from '../../services/api';
import { useUserProfile } from '../../hooks/useUserProfile';

function SearchBar() {
  const searchInput = useRef('');
  const { setUser } = useUserProfile();

  const { execute, status, value } = useAsync(
    () => getUser({ username: searchInput.current.value }),
    false,
  );

  const isInvalidClass = status === 'error' && 'is-invalid';

  const handleSubmit = (event) => {
    event.preventDefault();
    execute();
  };

  useEffect(() => {
    if (value) {
      setUser(value);
    }
  }, [value]);

  return (
    <div className="card">
      <div className="card-header text-center">
        <h1>Github Profile</h1>
      </div>
      <div className="card-body d-inline-flex justify-content-center">
        <form className="d-inline-flex m-auto gap-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className={`form-control ${isInvalidClass}`}
              type="text"
              ref={searchInput}
              placeholder="Search user"
            />
            <span className="invalid-feedback">
              {status === 'error' && 'User not found'}
            </span>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              {status !== 'pending' ? (
                <BsSearch />
              ) : (
                <span className="spinner-border spinner-border-sm" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
