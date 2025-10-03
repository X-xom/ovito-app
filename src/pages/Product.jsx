import { useOutlet, useOutletContext, useParams } from "react-router-dom"

export const Product = () => {
    const {products} = useOutletContext()
    const {id} = useParams();
    const findProduct = products.find((p) => p.id === +id)
    return (
        <section class="content">
                    <div class="container">
                        {findProduct ?
                        <div class="content-box">
                            <div class="content-product">
                                <div class="content-product__left">
                                    <h2 class="content-product__title">{findProduct.title}</h2>
                                    <img class="content-product__img" src={findProduct.img} alt="scooter" />
                                    <p class="content-product__text">
                                        {findProduct.description}
                                    </p>
                                </div>

                                <div class="content-product__right">

                                    <h2 class="content-product__price">{findProduct.price}</h2>
                                    <button class="btn btn-primary btn-large">Показать телефон</button>
                                </div>

                            </div>
                            <div class="content-side">
                                <h5 class="content-side__title">Сервисы и услуги</h5>
                                <div class="content-side-box">
                                    <div class="content-side__list">
                                        <div class="content-side__list-item">
                                            <img class="content-side__list-item--img" src="/img/truck.svg" alt="truck" />
                                            <h5 class="content-side__list-item--title">Доставка</h5>
                                            <p class="content-side__list-item--text">Проверка при получении и возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div class="content-side__list-item">
                                            <img class="content-side__list-item--img" src="/img/sedan.svg" alt="sedan" />
                                            <h5 class="content-side__list-item--title">Автотека</h5>
                                            <p class="content-side__list-item--text">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div class="content-side__list-item">
                                            <img class="content-side__list-item--img" src="/img/love.svg" alt="love" />
                                            <h5 class="content-side__list-item--title">Онлайн-бронирование жилья</h5>
                                            <p class="content-side__list-item--text">Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>


                                    <div class="content-side__footer">
                                        <p class="content-side__footer--item">© ООО «Абито», 2011–2021</p>
                                        <a href="#" class="content-side__footer--item">Политика конфиденциальности</a>
                                        <a href="#" class="content-side__footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <h2>Такого товара не существует!</h2>
                        }
                        
                    </div>
                </section>
    )
}