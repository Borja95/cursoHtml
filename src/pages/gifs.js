import React from "react";
import "../css/estilos.css";

class Gifs extends React.Component {
  render() {
    return (
      <>
        <h1 className="textoCentrado">Fiesta de Gifs</h1>

        <div className="contenedorMaestro">
          <div className="contenedorFila">
            <img
              className="imagenes"
              src="https://media1.giphy.com/media/idH8hdCYBSThguUPnj/giphy.gif?cid=ecf05e47391d78b9ba4578f58a0ce149d0009613bf01cc18&rid=giphy.gif"
            />
            <img
              className="imagenes"
              src="https://media1.giphy.com/media/YMGUXLD0sG7fQmmNNq/giphy.webp?cid=790b7611d4a47f27a180518ded5e7d07850fd5a7e4587747&rid=giphy.webp"
            />
            <img
              className="imagenes"
              src="https://media3.giphy.com/media/3o7ZepgBY3O76b2pZS/giphy.webp?cid=790b7611cd75714b7cea45f6f9239b18a00c6574ee07d6fa&rid=giphy.webp"
            />
          </div>

          <div className="contenedorFila">
            <img
              className="imagenes"
              src="https://media1.giphy.com/media/1qYK41jFXRQojgZZvY/giphy.webp?cid=790b7611cd75714b7cea45f6f9239b18a00c6574ee07d6fa&rid=giphy.webp"
            />
            <img
              className="imagenes"
              src="https://media2.giphy.com/media/fTn2eV3wCgkgg4442H/giphy.webp?cid=790b761186707662d8b041584080df7f9847e71632d5818c&rid=giphy.webp"
            />
            <img
              className="imagenes"
              src="https://media0.giphy.com/media/3otOKlQbXcD80ayJ9e/giphy.webp?cid=790b7611cd75714b7cea45f6f9239b18a00c6574ee07d6fa&rid=giphy.webp"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Gifs;
