const Main = () => {
  return (
    <main className="content">
      {/* Карточки товаров */}
      <div className="product-list">
        {/* Карточка товара */}
        <div className="product-list__item">
          <div className="product-card">
            {/* image */}
            <div className="product-card__image-wrapper">
              <img src="product1.jpg" alt="Смартфон Apple iPhone 15 128GB Black (Dual Sim)" />
              <a href="#" title="Смартфон Apple iPhone 15 128GB Black (Dual Sim)"></a>
            </div>
            {/* info */}
            <div className="product-card__description">
              <div className="product-card__price">
              <span className="product-card__price--sale-price">30 480 ₽</span>
              <span className="product-card__price--old-price">77 983 ₽</span>
              </div>
              <a className="product-card__title" href="#" title="Смартфон Apple iPhone 15 128GB Black (Dual Sim)">
                Смартфон Apple iPhone 15 128GB Black (Dual Sim)
              </a>
            </div>
            {/* button */}
            <div className="product-card__button-wrapper">
              <button className="primary-button product-card__button" title="Добавить в корзину">
                <span className="cart-icon"></span>В корзину
              </button>
            </div>
          </div>
        </div>
        {/* /Карточка товара */}

        <div className="product-list__item">
          <div className="product-card">
            <div className="product-card__image-wrapper">
              <img src="product1.jpg" alt="Товар 1" />
            </div>

            <div className="product-card__price">30 480 ₽</div>
            <a className="product-card__link" href="">
              Смартфон Apple iPhone 15 128GB Black (Dual Sim)
            </a>
            <div className="product-card__button-wrapper">
              <button className="product-card__button">Купить</button>
            </div>
          </div>
        </div>

        {/* Карточка товара */}
        <div className="product-list__item">
          <div className="product-card">
            {/* image */}
            <div className="product-card__image-wrapper">
              <img src="product1.jpg" alt="Товар 1" />
            </div>
            {/* info */}
            <div className="product-card__description">
              <div className="product-card__price">30 480 ₽</div>
              <a className="product-card__title" href="#">
                Смартфон Apple iPhone 15 128GB Black (Dual Sim)
              </a>
            </div>
            {/* button */}
            <div className="product-card__button-wrapper">
              <button className="primary-button product-card__button">
                Купить
              </button>
            </div>
          </div>
        </div>
        {/* /Карточка товара */}
      </div>
    </main>
  );
};

export default Main;
