import "./Error.css";

const Error = () => {
  return (
    <div className="error-wraper">
      {Array(150).fill(<i className="rain"></i>)}
      <p className="error-text">Something went wrong. Try again later...</p>
    </div>
  );
};

export default Error;
