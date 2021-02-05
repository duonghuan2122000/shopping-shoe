import React from 'react';
import Link from 'next/link';
import styles from '../styles/ItemProduct.module.css';
const ItemProduct: React.FC = () => {
    return (
        <div className={`column is-one-quarter-tablet is-half-mobile ${styles.item_product}`}>
            <Link href="/product/slug">
                <a>
                    <div className="box">
                        <figure className="image">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <div>
                            <p className="has-text-centered is-size-6" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordBreak: 'break-all' }}>Giay Nike sdfsdfs sdfsf sdfsdfs sfsf sfsdfs sdfsf sfs</p>
                            <p className="is-size-7-mobile">
                                <s>1,000,000</s>
                                <span> </span>
                                <span className="has-text-danger">500,000</span>
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default ItemProduct;