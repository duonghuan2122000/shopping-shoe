import React from 'react';
import styles from '../styles/SlideShow.module.css';
interface SlideShowProps {
    data: string[];
    duration?: number;
}

const SlideShow: React.FC<SlideShowProps> = (props: SlideShowProps) => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const showSlide = (i: number) => {
        let total = props.data.length;
        if(i < 0 || i >= total) i = 0;
        setCurrentIndex(i);
    }

    React.useEffect(() => {
        setTimeout(() => {
            showSlide(currentIndex + 1);
        }, props.duration);
    }, [currentIndex]);


    const listSlide = props.data.map((slide, index) => (
        <figure key={index} className={styles.fade + ' image'} style={{ display: currentIndex == index ? 'block': 'none' }}>
            <img src={slide} />
        </figure>
    ));

    const dotSlide = props.data.map((_, index) => (
        <span key={index} className={currentIndex == index ? styles.active + ' ' + styles.dot : styles.dot} onClick={() => showSlide(index)}></span>
    ));

    return (
        <div>
            {listSlide}
            <div className="has-text-centered">
                {dotSlide}
            </div>
        </div>
    );
}

SlideShow.defaultProps = {
    duration: 5000
}

export default SlideShow;