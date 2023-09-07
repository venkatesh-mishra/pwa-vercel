import React from 'react';
// import { Container } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
// import Header from '../../components/header';

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

App.getProps = async () => {
  return {};
};

export default App;
