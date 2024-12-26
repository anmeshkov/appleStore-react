import { useState } from 'react';

const InputPrice = (props) => {
  const [price, setPrice] = useState(props.value);

  return (
    <input
      className="input input-price"
      type="number"
      placeholder={price}
      value={price}
      min={props.min}
      max={props.max}
      onChange={(e) => setPrice(e.target.value)}
    />
  );
};

export default InputPrice;
