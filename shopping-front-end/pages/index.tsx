import React from 'react';
import ItemProduct from '../components/ItemProduct';
import Layout from '../layouts/index';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="columns is-mobile is-multiline">
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;