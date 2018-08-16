import React from 'react';

const AuthHeader = () => {
  return (
    <div>
      <img className="auth-logo" src="https://s3-us-west-1.amazonaws.com/wizard-chat-production/Wizard_Chat.png"></img>
      <h1 className="auth-h1">WizardChat</h1>
      <h2 className="auth-h2 bigger-margin">Instantly connect
            with other wizards in your life!</h2>
    </div>
  );
};

export default AuthHeader;
