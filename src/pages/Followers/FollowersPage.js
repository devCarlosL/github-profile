import useAsync from '../../hooks/useAsync';
import { getFollowers } from '../../services/api';
import { useUserProfile } from '../../hooks/useUserProfile';

import AnchorBlank from '../../components/AnchorBlank/AnchorBlank';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import RowCardContainer from '../../components/RowCardContainer/RowCardContainer';

function FollowersPage() {
  const { user } = useUserProfile();

  const requestUser = () => getFollowers({ username: user.login });
  const { status, value: followers, error } = useAsync(requestUser);

  return (
    <SectionContainer>
      <RowCardContainer title="Followers" status={status} error={error}>
        {followers?.map((follower) => (
          <li key={follower.id} className="card my-2 p-3">
            <AnchorBlank href={follower.html_url}>{follower.login}</AnchorBlank>
          </li>
        ))}
      </RowCardContainer>
    </SectionContainer>
  );
}

export default FollowersPage;
