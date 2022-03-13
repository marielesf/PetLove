import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    cachorros: [
      {
        imagem:
          "https://www.agrosete.com.br/wp-content/uploads/2017/09/rottweiler_1-2-800x450.jpg",
        nome: "Luna",
        idade: "5 meses",
      },
      {
        imagem:
          "https://www.petelegante.com.br/media/catalog/product/p/i/pijama_doguinhos_amarelo.jpg?pe_fullscreen=https://www.petelegante.com.br/media/catalog/product/p/i/pijama_doguinhos_amarelo.jpg",
        nome: "Duque",
        idade: "2 anos",
      },
      {
        imagem:
          "https://i.pinimg.com/originals/97/b2/aa/97b2aa7ffe670a0fc02699de1daab652.jpg",
        nome: "Perola",
        idade: "1 ano a 4 meses",
      },
      {
        imagem:
          "https://i.pinimg.com/736x/49/c3/f4/49c3f41633d9c05fb0d554f74b24fb94.jpg",
        nome: "Rex",
        idade: "1 ano",
      },
    ],
  };
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Adote</li>
            <li>Seja Voluntário</li>
          </ul>
          <div className="banner">
            <h1>PetLove</h1>
            <h1>Adote um amigo!</h1>
            <button className="box-button">Adotar um cachorrinho</button>
            <button className="box-button">Fazer doação</button>
            <button className="box-button">Seja voluntário</button>
          </div>
        </header>
        <main>
          <h2>Sobre</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            {" "}
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <h2>Adote</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <section className="gallery">
            {this.state.cachorros.map((item) => (
              <div className="div-img">
                <img
                  className="img-list"
                  src={item.imagem}
                  alt="filhote de cachorro"
                />
                <p key={item}>{item.nome}</p>
                <p key={item}>{item.idade}</p>
                <button className="box-button">Adotar</button>
              </div>
            ))}
          </section>
          <a href="#">Veja Mais</a>
        </main>
        <footer className="footer-title">
          <nav>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Adote</li>
              <li>Seja Voluntário</li>
            </ul>
          </nav>
          <div className="box-img">
            <div>
              <p>amigão@email.com</p>
              <p>Rua Rodrigues Alves, nº 5 Rio de Janeiro - RJ</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
