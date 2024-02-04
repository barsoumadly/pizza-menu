import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const App = function () {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
};

const Header = function () {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = function () {
  const pizzasNum = pizzaData.length;
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      {pizzasNum > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, organic and finger licking delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map(pizza => (
              <Pizza pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on the menu. Come back latter </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price="10"
      />

      <Pizza
        name="Pizza Funghi"
        photoName="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price="12"
      /> */}
    </section>
  );
};

const Pizza = function ({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>Ingredients: {pizza.ingredients}</p>
        <span style={{ textTransform: 'uppercase' }}>
          {pizza.soldOut ? 'sold out' : `Price: ${pizza.price}`}
        </span>
      </div>
    </div>
  );
};

const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : <p></p>}
    </footer>
  );
};

const Order = function ({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
