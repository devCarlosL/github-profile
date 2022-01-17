import { useCallback, useEffect, useState } from 'react';

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // Executa a asyncFunction vinda dos parametros
  // useCallback usado para não causar rerenders
  // e executar quando asyncFunction for chamada
  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus('success');
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]);

  return {
    execute,
    status,
    value,
    error,
  };
}

export default useAsync;
