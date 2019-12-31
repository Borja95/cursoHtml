import React from "react";
import "../css/index.css";
import box1 from "../img/box1.png";
import box2 from "../img/box2.png";
import reto1 from "../img/reto1.png";
import reto2 from "../img/reto2.png";
import reto3 from "../img/reto3.png";
import persona1 from "../img/persona1.png";
import persona2 from "../img/persona2.png";
import persona3 from "../img/persona3.png";
import persona4 from "../img/persona4.png";
import '../css/mobile.css';
import '../css/animation.css';

class Index extends React.Component {
  render() {
    return (
      <>
        <html lang="es">
          <meta charSet="UTF-8" />
          <title>Descripci&oacute;n</title>
          <header></header>
          <body>
            

            <div className="mainSection fadeIn">
              <h1>
                Este es un producto increible, no se que haces viendo que lo
                puedes tener
              </h1>
            </div>

            <div className="products">
              <div className="product fadeInUp">
                <div className="content">
                  <div className="imgContent">
                    <img src={box1} alt="" />
                  </div>
                  <h1>Producto 1</h1>
                  <p>
                    Miles de productos hay en el mercado, pero nada como una
                    caja con gatitos
                  </p>
                  <button className="btnQuiero">Lo Quiero!</button>
                </div>
              </div>

              <div className="product">
                <div className="content fadeInUp">
                  <div className="imgContent">
                    <img src={box2} alt="" />
                  </div>
                  <h1>Producto 1</h1>
                  <p>
                    Miles de productos hay en el mercado, pero nada como una
                    caja con gatitos
                  </p>
                  <button className="btnQuiero">Lo Quiero!</button>
                </div>
              </div>
            </div>

            <div className="descripciones">
              <div className="descripcion">
                <div className="content">
                  <img src={reto1} />
                  <h1>Los m&aacute;s suavecitos</h1>
                  <p>
                    Miles de productos que hay en el mercado pero nada como una
                    caja de gatitos
                  </p>
                </div>
              </div>

              <div className="descripcion">
                <div className="content">
                  <img src={reto2} />
                  <h1>Los m&aacute;s suavecitos</h1>
                  <p>
                    Miles de productos que hay en el mercado pero nada como una
                    caja de gatitos
                  </p>
                </div>
              </div>

              <div className="descripcion">
                <div className="content">
                  <img src={reto3} />
                  <h1>Los m&aacute;s suavecitos</h1>
                  <p>
                    Miles de productos que hay en el mercado pero nada como una
                    caja de gatitos
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />

            <div className="personasContent">
              <h1 className="tituloPersonas">Menciones</h1>
              
              <div className="personas">
                <div className="persona">
                  <div className="content">
                    <img src={persona1} alt="" />
                    <div className="textoPersona">
                      <h1>Mario</h1>
                      <p>
                        Miles de productos hay en el mercado pero nada como una
                        caja de gatitos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="persona">
                  <div className="content">
                    <img src={persona2} alt="" />
                    <div className="textoPersona">
                    <h1>Mar&iacute;a</h1>
                    <p>
                      Miles de productos hay en el mercado pero nada como una
                      caja de gatitos
                    </p>
                  </div>
                </div>
              </div>

              <div className="persona">
                <div className="content">
                  <img src={persona3} alt="" />
                  <div className="textoPersona">
                    <h1>Joe</h1>
                    <p>
                      Miles de productos hay en el mercado pero nada como una
                      caja de gatitos
                    </p>
                  </div>
                </div>
                </div>

                <div className="persona">
                  <div className="content">
                    <div className="textoPersona">
                      <img src={persona4} alt="" />
                      <h1>Jamaica</h1>
                      <p>
                        Miles de productos hay en el mercado pero nada como una
                        caja de gatitos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            
          </body>
        </html>
      </>
    );
  }
}

export default Index;
