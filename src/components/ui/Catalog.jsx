import { useQuery } from "@tanstack/react-query";
import { CarService } from "../../services/car.service";
import CarItem from "../screens/home/car-item/CarItem";

const Catalog = () => {
  const { data, isLoading } = useQuery(['cars'], () => CarService.getAll());

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data && data.length ? (
        data.map((car) => {
          return <CarItem key={car.id} car={car} />;
        })
      ) : (
        <p>There are no cars!</p>
      )}
    </div>
  );
};

export default Catalog;
