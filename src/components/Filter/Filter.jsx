import CheckboxMemory from '../CheckboxMemory/CheckboxMemory';
import CheckboxColor from '../CheckboxColor/CheckboxColor';

const Filter = () => {
  return (
    <div className="widget">
      <h2 className="widget__title">Фильтр</h2>
      <div className="widget__body">
        {/* Дополнительные фильтры */}
        <div className="filter">
          <div className="filter__title">Цена</div>
          <div className="filter__body">
            <div className="filter-price">
              <input
                className="input input-price"
                id="min-price"
                type="number"
                placeholder="42"
                min={0}
              />
              <input
                className="input input-price"
                id="max-price"
                type="number"
                placeholder="4232"
                min={0}
              />
            </div>
          </div>
        </div>
        {/* Дополнительные фильтры */}
        <div className="filter">
          <div className="filter__title">Объем памяти</div>
          <div className="filter__body">
            <div className="filter-memory">
              <CheckboxMemory value="128" title="128 GB"></CheckboxMemory>
              <CheckboxMemory value="256" title="256 GB"></CheckboxMemory>
              <CheckboxMemory value="512" title="512 GB"></CheckboxMemory>
              <CheckboxMemory value="1" title="1 TB"></CheckboxMemory>
              <CheckboxMemory value="2" title="2 TB"></CheckboxMemory>
            </div>
          </div>
        </div>
        {/* Дополнительные фильтры */}
        <div className="filter">
          <div className="filter__title">Цвета</div>
          <div className="filter__body">
            <div className="filter-color">
              <CheckboxColor
                bgColor="#ffffff"
                borderColor="#000000"
                title="Белый"
              ></CheckboxColor>
              <CheckboxColor
                bgColor="#BEB9B9"
                borderColor="#BEB9B9"
                title="Серебристый"
              ></CheckboxColor>
              <CheckboxColor
                bgColor="#4B4A48"
                borderColor="#4B4A48"
                title="Графитовый"
              ></CheckboxColor>
              <CheckboxColor
                bgColor="#1D1D1F"
                borderColor="#1D1D1F"
                title="Темная ночь"
              ></CheckboxColor>
              <CheckboxColor
                bgColor="#FFD310"
                borderColor="#FFD310"
                title="Золотой"
              ></CheckboxColor>
              <CheckboxColor
                bgColor="#F9C7CF"
                borderColor="#F9C7CF"
                title="Розовый"
              ></CheckboxColor>
              <CheckboxColor
                bgColor="#A1CFF1"
                borderColor="#A1CFF1"
                title="Небесно-голубой"
              ></CheckboxColor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
