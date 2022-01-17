import useAsync from '../../hooks/useAsync';
import { getUserStarred } from '../../services/api';
import { useUserProfile } from '../../hooks/useUserProfile';

import AnchorBlank from '../../components/AnchorBlank/AnchorBlank';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import RowCardContainer from '../../components/RowCardContainer/RowCardContainer';

function StarredRepos() {
  const { user } = useUserProfile();

  const requestUser = () => getUserStarred({ username: user.login });
  const { status, value: starred, error } = useAsync(requestUser);

  return (
    <SectionContainer>
      <RowCardContainer title="Starred Repos" status={status} error={error}>
        {starred?.map((starredRepo) => (
          <li key={starredRepo.id} className="card my-2 p-3">
            <AnchorBlank href={starredRepo.html_url}>
              {starredRepo.name}
            </AnchorBlank>
          </li>
        ))}
      </RowCardContainer>
    </SectionContainer>
  );
}

export default StarredRepos;
