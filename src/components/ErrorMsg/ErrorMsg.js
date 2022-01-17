function ErrorMsg({ errorMessage }) {
  return (
    <div className="text-center text-danger">
      <span>{errorMessage}</span>
    </div>
  );
}

export default ErrorMsg;
