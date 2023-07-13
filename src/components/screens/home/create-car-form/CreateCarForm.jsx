import { useForm } from 'react-hook-form';
import styles from './CreateCarForm.module.css';
import ErrorMessage from './ErrorMessage';
import { useCreateCar } from './useCreateCar';

const CreateCarForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { createCar } = useCreateCar(reset);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register('name', { required: 'Name is required!' })}
        placeholder="Name"
      />
      <input
        {...register('price', { required: 'Price is required!' })}
        placeholder="Price"
      />
      <input
        {...register('image', { required: 'Image is required!' })}
        placeholder="Image"
      />
      <ErrorMessage errors={errors} />

      <button className="btn">Create</button>
    </form>
  );
};

export default CreateCarForm;
