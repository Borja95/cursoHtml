import React from "react";
import "../css/index.css";
import "../css/grid.css";
import box2 from "../img/box2.png";

class Venta extends React.Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="moduloPago">
                <div className="moduloPagoImagen">
                  <img src={box2} alt="" />
                </div>
                <h3>Producto 1</h3>
                <p>
                  Miles de productos hay en el mercado, pero nada como una caja
                  con gatitos
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className="moduloPago">
                <form action="https://www.google.com/">
                <label for="name">Nombre</label>
                <br/>
                <input name="name" type="text" className="data"/>
                <br/>
                <label for="email">E-mail</label>
                <br/>
                <input name="email" type="text" className="data"/>
                <br/>
                <label for="phone">Tel&eacute;fono</label>
                <br/>
                <input name="phone" type="text" className="data"/>
                <input type="submit" name="submit" className="btnQuiero" value="Confirmar Pago"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default Venta;
