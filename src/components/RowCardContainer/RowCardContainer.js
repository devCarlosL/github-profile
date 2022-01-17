/* eslint-disable object-curly-newline */
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

import Row from '../Row/Row';
import Spinner from '../Spinner/Spinner';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import ResponsiveCol from '../ResponsiveCol/ResponsiveCol';

function RowCardContainer({ status, error, title, children }) {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Row>
      <ResponsiveCol>
        <div className="card">
          <div className="card-header text-center">
            <BsArrowLeftShort className="back__icon" onClick={goBack} />
            <h2 className="card-title">{title}</h2>
          </div>
          {status === 'pending' && (
            <div className="d-flex justify-content-center py-5">
              <Spinner />
            </div>
          )}
          {status === 'error' && <ErrorMsg errorMessage={error?.message} />}
          {status === 'success' && (
            <ul className="card-body mh__60 overflow-auto">{children}</ul>
          )}
        </div>
      </ResponsiveCol>
    </Row>
  );
}

export default RowCardContainer;
