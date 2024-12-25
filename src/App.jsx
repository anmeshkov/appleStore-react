import { useState } from 'react';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      {/* header */}
      <Header></Header>
      {/* content */}
      <Layout></Layout>
    </>
  );
}

export default App;
