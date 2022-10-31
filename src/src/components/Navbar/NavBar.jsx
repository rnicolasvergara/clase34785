import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import h1 from "../ItemListContainer/ItemListContainer";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <>
            <div className='Logo'>
                <img src="../img/logoCali3.png" alt="" />
            </div>
            <h2>Cali Tienda</h2>
            <ItemListContainer title="Bienvenidos a Nuestra Tienda Virtual" />
            <div className='navBar'>
                <ul>
                    <li>
                        <a href="">Velas de Soja</a>
                    </li>
                    <li>
                        <a href="">Difusores</a>
                    </li>
                    <li>
                        <a href="">Sprays</a>
                    </li>
                    <li>
                        <a href="">Adornos</a>
                    </li>
                    <CartWidget/>
                </ul>
            </div>
        </>
    )
}

export default NavBar