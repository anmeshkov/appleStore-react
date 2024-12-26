const CheckboxColor = ({bgColor, borderColor, title}) => {
  const style = {
    backgroundColor: bgColor,
    borderColor: borderColor,
 }

  return (
    <label className="color-checkbox-container">
      <input className="visually-hidden" type="checkbox" />
      <span
        className="color-checkmark"
        style={style}
        title={title}
      ></span>
    </label>
  );
};

export default CheckboxColor;