/* =================================================================
 Header Components
================================================================= */
const Header = () => {
  return (
    <div className="header">
      <div className="container header-wrapper">
        {/* logo */}
        <div className="logo">
          <h1 className="logo__title">:mestore</h1>
          <p className="logo__subtitle">сеть магазинов техники Apple</p>
          <a className="logo__link" href="#" title=":mestore | Cеть магазинов техники Apple"></a>
        </div>

        {/* search form */}
        <div className="search">
          <form className="search-product-form" action="#">
            <input className="input-text search-product-form__input" type="text" placeholder="Поиск по товарам" />
            <button className="input-button search-product-form__button" type="submit">Найти</button>
          </form>
        </div>

        {/* cart */}
        <div className="shopping-cart">
          <button type="submit">Корзина</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
