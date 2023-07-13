import { Link } from 'react-router-dom';
import styles from './CarItem.module.css';
import Price from './Price';

const CarItem = ({ car }) => {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <Price price={car.price} />
        <Link className="btn" to={`/car/${car.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CarItem;
