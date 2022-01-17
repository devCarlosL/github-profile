/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import { useUserProfile } from '../../hooks/useUserProfile';

const links = [
  { path: 'repos', linkName: 'Repositories' },
  { path: 'followers', linkName: 'Followers' },
  { path: 'starred', linkName: 'Starred' },
];

function Profile() {
  const { user } = useUserProfile();

  return (
    <>
      {user && (
        <div className="card p-3 mt-5">
          <div className="d-flex flex-column">
            <figure className="d-inline-flex justify-content-center pt-4">
              <img
                className="image__size rounded-circle"
                src={user.avatar_url}
                alt="Avatar"
              />
            </figure>
            <div className="m-auto p-2">
              <h5 className="card-title">{user.name}</h5>
            </div>
            <div className="d-inline-flex justify-content-around p-4">
              {links.map(({ path, linkName }) => (
                <Link
                  to={path}
                  key={path}
                  className="nav-link d-inline-flex flex-column align-items-center"
                >
                  {linkName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
