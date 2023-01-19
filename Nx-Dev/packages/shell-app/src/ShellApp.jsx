import React from 'react'
import { Button } from 'component-app'
import { App } from 'team-a';

const ShellApp = () => {
  return (
    <div>
      I'm from the <code>component-app</code>
      <Button />
      <br />
      <App />
    </div>
  );
};

export default ShellApp;