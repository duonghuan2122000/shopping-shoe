import React from 'react';
import Layout from '../layouts/index';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <div className="box">
              <figure className="image">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;