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
          <a
            className="logo__link"
            href="#"
            title=":mestore | Cеть магазинов техники Apple"
          ></a>
        </div>

        {/* search form */}
        <div className="search">
          <form className="search-product-form" action="#">
            <input
              className="input-text search-product-form__input"
              type="text"
              placeholder="Поиск по товарам"
            />
            <button
              className="input-button search-product-form__button"
              type="submit"
              title="Поиск"
            ></button>
          </form>
        </div>

        {/* cart */}
        <div className="shopping-cart">
          <button className="primary-button button-transition" type="submit" title="Корзина">
            <span>
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C13.3137 0 16 3.0655 16 6.84698V7.98815H20V10.2705H18.833L18.0764 20.6357C18.0332 21.2271 17.5999 21.6821 17.0798 21.6821H2.92014C2.40005 21.6821 1.96678 21.2271 1.92359 20.6357L1.166 10.2705H0V7.98815H4V6.84698C4 3.0655 6.68629 0 10 0ZM16.826 10.2705H3.173L3.84 19.3998H16.159L16.826 10.2705ZM11 12.5528V17.1175H9.00002V12.5528H11ZM7 12.5528V17.1175H5V12.5528H7ZM15 12.5528V17.1175H13V12.5528H15ZM10 2.28233C7.85781 2.28233 6.10892 4.20401 6.0049 6.61916L6 6.84698V7.98815H14V6.84698C14 4.40238 12.316 2.40662 10.1996 2.28792L10 2.28233Z"
                />
              </svg>
            </span>
            Корзина
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
