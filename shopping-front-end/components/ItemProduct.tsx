import React from 'react';
import Link from 'next/link';
import styles from '../styles/ItemProduct.module.css';
import Product from '../pages/product/[slug]';

export interface ItemProductProps {
    // _id: string;
    name: string;
    price: number;
    discount: number;
    colors: Color[],
    // category: string;
    slug: string;
}

interface Color {
    name: string;
    images: string[];
}

const ItemProduct: React.FC<ItemProductProps> = (props: ItemProductProps) => {

    const renderPriceProduct = props.discount > 0 ?
        (
            <div>
                <s>{props.price}</s>
                <span> </span>
                <span className="has-text-danger">{props.price * (100 - props.discount) / 100}</span>
            </div>
        ) : (
            <div>
                <span>{props.price}</span>
            </div>
        );

    return (
        <div className={`column is-one-quarter-tablet is-half-mobile ${styles.item_product}`}>
            <Link href={`product/${props.slug}`}>
                <a>
                    <div className="box">
                        <figure className="image">
                            <img src={props.colors[0]['images'][0]} alt={props.name} />
                        </figure>
                        <div>
                            <p className="has-text-centered is-size-6" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordBreak: 'break-all' }}>{props.name}</p>
                            <p className="is-size-7-mobile">
                                {renderPriceProduct}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default ItemProduct;