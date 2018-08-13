import React from 'react';

const AuthErrors = ({ errors }) => (
  <div>
    {
      errors.map((error, idx)=>{
        return (<p className="auth-h2 error" key={idx}>{error}</p>);
      })
    }
  </div>
);

export default AuthErrors;
