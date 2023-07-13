const ErrorMessage = ({ errors }) => {
  if (!errors) return null;

  return (
    <>
      {errors.name?.message && (
        <p style={{ color: 'red' }}>{errors.name.message}</p>
      )}
      {errors.price?.message && (
        <p style={{ color: 'red' }}>{errors.price.message}</p>
      )}
      {errors.image?.message && (
        <p style={{ color: 'red' }}>{errors.image.message}</p>
      )}
    </>
  );
};

export default ErrorMessage;
