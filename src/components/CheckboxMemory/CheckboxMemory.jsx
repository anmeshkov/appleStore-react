const CheckboxMemory = ({value, title}) => {
  return (
    <label className="checkbox-container" title={title}>
      <input className="visually-hidden" type="checkbox" />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default CheckboxMemory;
