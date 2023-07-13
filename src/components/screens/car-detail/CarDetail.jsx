import { useParams, Link } from 'react-router-dom';
import { CarService } from '../../../services/car.service';
import { useEffect, useState } from 'react';
import CarItem from '../home/car-item/CarItem';
import { withAuth } from '../../../HOC/withAuth';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await CarService.getById(id);
      setCar(data);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Link to="/">Back</Link>
      {car ? <CarItem car={car} /> : <p>Loading...</p>}
    </div>
  );
};

export default withAuth(CarDetail);
