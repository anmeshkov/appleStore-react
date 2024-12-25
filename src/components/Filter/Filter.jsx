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
        <div className="filter filter-memory">
          <div className="filter__title">Объем памяти</div>
          <div className="filter__body"></div>
        </div>
        {/* Дополнительные фильтры */}
        <div className="filter filter-color">
          <div className="filter__title">Цвета</div>
          <div className="filter__body"></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
