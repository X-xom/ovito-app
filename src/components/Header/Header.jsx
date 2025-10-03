import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={'/'} className="header-logo">
            <img src="/img/logo.svg" alt="logo" />
            <span>Ovito</span>
          </Link>

          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/img/burger.svg" alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
};
