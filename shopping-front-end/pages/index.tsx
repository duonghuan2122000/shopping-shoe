import React from 'react';
import ItemProduct, { ItemProductProps } from '../components/ItemProduct';
import Layout from '../layouts/index';

interface HomeState {
  data: ItemProductProps[]
}

const Home: React.FC = () => {

  const [products, setProducts] = React.useState<HomeState>({
    data: [
      {
        name: "Giày Thể Thao Adi.das Superstar Trắng mũi sò F1",
        price: 300000,
        discount: 28,
        colors: [
          {
            name: "Trắng bạc",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          },
          {
            name: "Trắng đen",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          }
        ],
        slug: "giay-the-thao-adidas-superstar-trang-mui-so-f1"
      },
      {
        name: "Giày Thể Thao Adi.das Superstar Trắng mũi sò F1",
        price: 300000,
        discount: 28,
        colors: [
          {
            name: "Trắng bạc",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          },
          {
            name: "Trắng đen",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          }
        ],
        slug: "giay-the-thao-adidas-superstar-trang-mui-so-f1"
      },
      {
        name: "Giày Thể Thao Adi.das Superstar Trắng mũi sò F1",
        price: 300000,
        discount: 28,
        colors: [
          {
            name: "Trắng bạc",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          },
          {
            name: "Trắng đen",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          }
        ],
        slug: "giay-the-thao-adidas-superstar-trang-mui-so-f1"
      },
      {
        name: "Giày Thể Thao Adi.das Superstar Trắng mũi sò F1",
        price: 300000,
        discount: 28,
        colors: [
          {
            name: "Trắng bạc",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          },
          {
            name: "Trắng đen",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          }
        ],
        slug: "giay-the-thao-adidas-superstar-trang-mui-so-f1"
      },
      {
        name: "Giày Thể Thao Adi.das Superstar Trắng mũi sò F1",
        price: 300000,
        discount: 28,
        colors: [
          {
            name: "Trắng bạc",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          },
          {
            name: "Trắng đen",
            images: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
          }
        ],
        slug: "giay-the-thao-adidas-superstar-trang-mui-so-f1"
      },
    ]
  });


  const renderProducts = products.data.map((product, index) => (
    <ItemProduct key={index} {...product} />
  ));

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="columns is-mobile is-multiline">
            {renderProducts}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;