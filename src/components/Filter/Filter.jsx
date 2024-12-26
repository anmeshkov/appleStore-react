import InputPrice from '../InputPrice/InputPrice';
import CheckboxMemory from '../CheckboxMemory/CheckboxMemory';
import CheckboxColor from '../CheckboxColor/CheckboxColor';

const Filter = () => {
  const memoryValues = [
    { id: 0, value: '128', title: '128 GB' },
    { id: 1, value: '256', title: '256 GB' },
    { id: 2, value: '512', title: '512 GB' },
    { id: 3, value: '1', title: '1 TB' },
    { id: 4, value: '2', title: '2 TB' },
  ];

  const colorValues = [
    { id: 0, bgColor: '#ffffff', borderColor: '#000000', title: 'Белый' },
    { id: 1, bgColor: '#BEB9B9', borderColor: '#BEB9B9', title: 'Серебристый' },
    { id: 2, bgColor: '#4B4A48', borderColor: '#4B4A48', title: 'Графитовый' },
    { id: 3, bgColor: '#1D1D1F', borderColor: '#1D1D1F', title: 'Темная ночь' },
    { id: 4, bgColor: '#FFD310', borderColor: '#FFD310', title: 'Золотой' },
    { id: 5, bgColor: '#F9C7CF', borderColor: '#F9C7CF', title: 'Розовый' },
    {
      id: 6,
      bgColor: '#A1CFF1',
      borderColor: '#A1CFF1',
      title: 'Небесно-голубой',
    },
  ];

  return (
    <div className="widget">
      <h2 className="widget__title">Фильтр</h2>
      <div className="widget__body">
        {/* Дополнительные фильтры */}
        <div className="filter">
          <div className="filter__title">Цена</div>
          <div className="filter__body">
            <div className="filter-price">
              <InputPrice min="0" max="5000000" value="142"></InputPrice>
              <InputPrice min="0" max="5000000" value="52342"></InputPrice>
            </div>
          </div>
        </div>
        {/* Дополнительные фильтры */}
        <div className="filter">
          <div className="filter__title">Объем памяти</div>
          <div className="filter__body">
            <div className="filter-memory">
              {memoryValues.map((el) => {
                return (
                  <CheckboxMemory
                    key={el.id}
                    value={el.value}
                    title={el.title}
                  ></CheckboxMemory>
                );
              })}
            </div>
          </div>
        </div>
        {/* Дополнительные фильтры */}
        <div className="filter">
          <div className="filter__title">Цвета</div>
          <div className="filter__body">
            <div className="filter-color">
              {colorValues.map((el) => {
                return (
                  <CheckboxColor
                    key={el.id}
                    bgColor={el.bgColor}
                    borderColor={el.borderColor}
                    title={el.title}
                  ></CheckboxColor>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
