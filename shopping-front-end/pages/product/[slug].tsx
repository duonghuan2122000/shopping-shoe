import React from 'react';
import SlideShow from '../../components/SlideShow';
import Layout from '../../layouts/index'
const Product: React.FC = () => {

    const [product] = React.useState({
        _id: { "$oid": "600945e54d175e1544580b1f" },
        name: "Giày Thể Thao Adi.das Superstar Trắng mũi sò F1",
        price: 300000,
        discount: 28,
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
        colors: [
            {
                name: "Trắng bạc",
                image: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
            },
            {
                name: "Trắng đen",
                image: ["https://giayxshop.vn/wp-content/uploads/2019/03/MG_5424.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5429.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5425.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5426.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5427.jpg", "https://giayxshop.vn/wp-content/uploads/2019/03/MG_5430.jpg"]
            }
        ],
        category: { "$oid": "600839b3667f8f5c4fa41516" },
        slug: "giay-the-thao-adidas-superstar-trang-mui-so-f1"
    });

    const sizeElements = product.sizes.map((size, index) => (
        <button key={index} className="button">{size}</button>
    ));

    const colorsElements = product.colors.map((color, index) => (
        <button key={index} className="button">{color.name}</button>
    ));

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="columns">
                        <div className="column is-4">
                            <SlideShow data={[1, 1, 1, 1, 1]} />

                        </div>
                        <div className="column is-8">
                            <p className="is-size-4">{product.name}</p>
                            <p>
                                <s>{product.price}</s>
                                <span> </span>
                                <span className="has-text-danger">{product.price * (100 - product.discount) / 100}</span>
                            </p>

                            <br />

                            <p>Sizes:</p>
                            <div className="buttons">
                                {sizeElements}
                            </div>

                            <br />

                            <p>Colors:</p>
                            <div className="buttons">
                                {colorsElements}
                            </div>

                            <button className="button is-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Product;