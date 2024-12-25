const Navigation = () => {
  return (
    <div className="widget">
      <h2 className="widget__title">Категории</h2>
      <div className="widget__body">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item nav__item--current">
              <a className="nav__link" title="Ноутбуки">Ноутбуки</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" title="Телефоны">
                Телефоны
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" title="Планшеты">
                Планшеты
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" title="Компьютеры">
                Компьютеры
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" title="Часы">
                Часы
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
