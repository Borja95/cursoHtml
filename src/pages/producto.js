import React from "react";
import "../css/grid.css";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";

class Producto extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row marginBottom">
            <div className="col-4">
              <h1>Productos</h1>
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col-4">
              <img src={product1} alt="" className="imagenes" />
            </div>
            <div className="col-8 margen">
              <h2>Producto 1</h2>
              <p>
                Miles de productos hay en el mercado, pero nada como una caja
                con gatitos, Miles de productos hay en el mercado, pero nada
                como una caja de gatitos
              </p>
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col-8 margen2">
              <h2>Producto 1</h2>
              <p>
                Miles de productos hay en el mercado, pero nada como una caja
                con gatitos, Miles de productos hay en el mercado, pero nada
                como una caja de gatitos
              </p>
            </div>
            <div className="col-4">
              <img src={product2} alt="" className="imagenes" />
            </div>
          </div>

          <div className="row marginBottom">
            <div className="col-4">
              <img src={product3} alt="" className="imagenes" />
            </div>
            <div className="col-8 margen">
              <h2>Producto 1</h2>
              <p>
                Miles de productos hay en el mercado, pero nada como una caja
                con gatitos, Miles de productos hay en el mercado, pero nada
                como una caja de gatitos
              </p>
            </div>
          </div>


        </div>



        <br />
      </>
    );
  }
}

export default Producto;
