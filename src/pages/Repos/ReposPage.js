/* eslint-disable jsx-a11y/anchor-is-valid */
import useAsync from '../../hooks/useAsync';
import { getUserRepos } from '../../services/api';
import { useUserProfile } from '../../hooks/useUserProfile';

import AnchorBlank from '../../components/AnchorBlank/AnchorBlank';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import RowCardContainer from '../../components/RowCardContainer/RowCardContainer';

function Repos() {
  const { user } = useUserProfile();

  const requestUser = () => getUserRepos({ username: user?.login });
  const { status, value: repos, error } = useAsync(requestUser);

  return (
    <SectionContainer>
      <RowCardContainer title="Repositories" status={status} error={error}>
        {repos?.map((repo) => (
          <li key={repo.id} className="card my-2 p-3">
            <AnchorBlank href={repo.html_url}>{repo.name}</AnchorBlank>
          </li>
        ))}
      </RowCardContainer>
    </SectionContainer>
  );
}

export default Repos;
