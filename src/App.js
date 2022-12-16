import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ProductContainer from './containers/ProductContainer/ProductContainer';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomeContainer />} />
          <Route path={'products'} element={<ProductContainer />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
