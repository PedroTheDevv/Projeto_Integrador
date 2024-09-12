import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const products = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
        products();
    })

    return (
        <div className="home-container">
            {/* Cabeçalho */}
            <header className="header">
                <div className="logo">GameStoreBR</div>
                <nav className="nav">
                    <a href="#home" className="nav-link">Início</a>
                    <a href="#featured" className="nav-link">Destaques</a>
                    <a href="#cart" className="nav-link">Carrinho</a>
                    <Link to="/login" className="nav-link">Login / Cadastro</Link>
                </nav>
            </header>

            {/* Seção de Destaque */}
            <section id="home" className="highlight">
                <div className="highlight-content">
                    <h1>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</h1>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                </div>
            </section>

            {/* Produtos em Destaque */}
            <section id="featured" className="featured-products">
                <h2 className="section-title">Destaques</h2>
                <div className="product-cards">
                    {data.map(item => (
                        <div className="product-card">
                            <img src={item.image_url} alt="Produto 1" className="product-image" />
                            <h3 className="product-title">{item.name}</h3>
                            <p className="product-description">R${item.price}</p>
                            <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                        </div>
                    ))}
                    {/*<div className="product-card">
                        <img src="https://images.tcdn.com.br/img/img_prod/1211726/ea_sports_fc_24_1713_1_44ce0c1cc2a96d5cd1fbe4767d19ac8c.png" alt="Produto 2" className="product-image" />
                        <h3 className="product-title">EA Sports FC 24 - PlayStation 5  (Mídia Física) </h3>
                        <p className="product-description">R$182,79</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61aD5rcWynL.AC_SX679.jpg" alt="Produto 3" className="product-image" />
                        <h3 className="product-title">Halo Infinite (Edição Exclusiva) - Xbox</h3>
                        <p className="product-description">R$113,90</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61fw1twaLJL.AC_SX679.jpg" alt="Produto 4" className="product-image" />
                        <h3 className="product-title">Resident Evil Village – Gold Edition - Xbox</h3>
                        <p className="product-description">R$169,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvCmKHVVEyrDL0UTrjc72NOlkmGUEyu55ujUiPuGuUWoEkTmxGNSgfT9_1LQbhXoeeW1Ix0d2eamz7gEG-rWzUmFIpEzNo6Hwd69ciEY4&usqp=CAE" alt="Produto 5" className="product-image" />
                        <h3 className="product-title">Assassin'S Creed Origins - Playstation 4</h3>
                        <p className="product-description">R$109,89</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRu3i4fQqqMXiGBiyvhwMHyhXEW9BzR9rWQtA7Mbod4nvHi9SEUl1G33IvNTtIZIf2bfGCjHd7UaUn6R_XTXnHkc5coCOOxhd9Igqrb9UD9&usqp=CAE" alt="Produto 6" className="product-image" />
                        <h3 className="product-title"> Uncharted - Legado dos Ladrões - PS5</h3>
                        <p className="product-description">R$229,99</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/718xdCZr-aL.AC_SX679.jpg" alt="Produto 7" className="product-image" />
                        <h3 className="product-title">GTA V - Xbox Series X</h3>
                        <p className="product-description">R$82,90</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/71yGHqC3BoL.AC_SX569.jpg" alt="Produto 8" className="product-image" />
                        <h3 className="product-title">Star War Jedi: Fallen Order Edição Padrão - Xbox One</h3>
                        <p className="product-description">R$55,90</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>*/}
                </div>
            </section>

            {/* Ofertas Especiais */}
            <section className="special-offers">
                <h2 className="section-title">Ofertas Especiais</h2>
                <div className="offers-container">
                    <div className="offer-item">
                        <img src="https://m.media-amazon.com/images/I/516xBCpnsML._AC_SX300_SY300_QL70_ML2.jpg" alt="Oferta 1" className="offer-image" />
                        <div className="offer-details">
                            <h3>Red Dead Redemption 2 - PlayStation 4</h3>
                            <p>De R$129,90 para R$117,89</p>
                            <a href="#featured" className="cta-button">Aproveitar</a> <a href="#cart" className="cta-button">🛒</a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <img src="https://m.media-amazon.com/images/I/81h0oxLQQPL._AC_SX300_SY300_QL70_ML2.jpg" alt="Oferta 2" className="offer-image" />
                        <div className="offer-details">
                            <h3>God Of War Hits - PlayStation 4</h3>
                            <p>De R$99,90 para R$86,33</p>
                            <a href="#featured" className="cta-button">Aproveitar</a> <a href="#cart" className="cta-button">🛒</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Novidades */}
            <section className="new-arrivals">
                <h2 className="section-title">Novidades</h2>
                <div className="product-cards"> {/* Reutiliza a classe para os cards */}
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61Lhf7o6SgL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 1" className="product-image" />
                        <h3 className="product-title">Sniper Elite 5 (PS5)</h3>
                        <p className="product-description">R$259,89</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61KU9GYqDPL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 2" className="product-image" />
                        <h3 className="product-title">The Last of Us Part II Remastered - PlayStation 5</h3>
                        <p className="product-description">R$214,99</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/81RfcW3Ml-L._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 3" className="product-image" />
                        <h3 className="product-title">Marvel's Spider-Man 2 - Edição Standard - PlayStation 5</h3>
                        <p className="product-description">R$283,55</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/81fKcstBvkL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 4" className="product-image" />
                        <h3 className="product-title">Hogwarts Legacy - PlayStation 5</h3>
                        <p className="product-description">R$229,90</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/91ik5MsUTgL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 5" className="product-image" />
                        <h3 className="product-title">Batman the Enemy Within - Xbox One</h3>
                        <p className="product-description">R$52,48 </p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/71B7wnMzgeL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 6" className="product-image" />
                        <h3 className="product-title">Tom Clancy’S - Rainbow Six Siege - Xbox One</h3>
                        <p className="product-description">R$53,91</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/81qsBBTCRjL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 7" className="product-image" />
                        <h3 className="product-title">Battlefield 2042 - Xbox series X</h3>
                        <p className="product-description">R$73,90</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/61xHyukBywL._AC_SX300_SY300_QL70_ML2.jpg" alt="Novidade 8" className="product-image" />
                        <h3 className="product-title">Stranger Of Paradise: Final Fantasy Origin - Xbox Series X</h3>
                        <p className="product-description">R$129,99</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                </div>
            </section>
            {/* Outros Jogos*/}
            <section className="new-arrivals">
                <h2 className="section-title">Outros Jogos</h2>
                <div className="product-cards"> {/* Reutiliza a classe para os cards */}
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/5b549dc8da-ca25a11128cefecfa817129456857392-480-0.webp" alt="Jogo 1" className="product-image" />
                        <h3 className="product-title">The Callisto Protocol – Ps5</h3>
                        <p className="product-description">R$189,99</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/5b6d6b892a-b461a24b9d3ab7fc8a17129464217310-640-0.webp" alt="Jogo 2" className="product-image" />
                        <h3 className="product-title">Guardiões da Galáxia Marvel PS5</h3>
                        <p className="product-description">R$150,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/e1aac95d2f-310314e87982052e4e17129465312274-640-0.webp" alt="Jogo 3" className="product-image" />
                        <h3 className="product-title">Ratchet & Clank - PlayStation 5</h3>
                        <p className="product-description">R$200,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://m.media-amazon.com/images/I/81LrjGyor-L._AC_SX679_.jpg" alt="Jogo 4" className="product-image" />
                        <h3 className="product-title">Death Stranding Versão Do Diretor - PlayStation 5</h3>
                        <p className="product-description">R$169,90</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/mfhegkdngcz2u5p3gqaru-s9ydozjzt84hj3pz6jsd8_350x200_2x-0-31cjw95rjx-dc38cdc7cf5616af1717129437356150-1024-1024.webp" alt="Jogo 5" className="product-image" />
                        <h3 className="product-title">Call of Duty WWII Gold Edition - XBOX</h3>
                        <p className="product-description">R$150,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/m2lgdpglgdrwgbsnw-bdv_qsnqoddg9kufqmayhf1a4_350x200_2x-0-hr2eaanyod-16a1443771c447a8f817129437533650-1024-1024.webp" alt="Jogo 6" className="product-image" />
                        <h3 className="product-title">Dead Island 2 XBOX</h3>
                        <p className="product-description">R$250,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/rzk5xb89skvtlt_zaprcg8sreosfnz4nxzocpcxoktk_350x200_2x-0-pfdid7tq96-6bd11f2770a075f43517129438881988-1024-1024.webp" alt="Jogo 7" className="product-image" />
                        <h3 className="product-title">Avatar: Frontiers of Pandora (Xbox X|S)</h3>
                        <p className="product-description">R$300,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                    <div className="product-card">
                        <img src="https://acdn.mitiendanube.com/stores/004/548/928/products/d91y5f34ym-gf0wstidiawtkecjdn8zej6cz7bv1dwo_350x200_2x-0-3osmmklcs5-7093b484e610ab179717129438904822-1024-1024.webp" alt="Jogo 8" className="product-image" />
                        <h3 className="product-title">NBA 2K24 Xbox One</h3>
                        <p className="product-description">R$250,00</p>
                        <a href="#featured" className="cta-button">Comprar Agora</a> <a href="#cart" className="cta-button">🛒</a>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="testimonials">
                <h2 className="section-title">Avaliações</h2>
                <div className="testimonial-list">
                    <div className="testimonial-item">
                        <p>"Excelente loja, encontrei todos os jogos que procurava!"</p>
                        <span>- Pedro Ramos</span>
                    </div>
                    <div className="testimonial-item">
                        <p>"Preços ótimos e entrega rápida, super recomendo!"</p>
                        <span>- Viviane Santos</span>
                    </div>
                    <div className="testimonial-item">
                        <p>"Variedade incrível de jogos, com certeza vou comprar novamente."</p>
                        <span>- Marcos Paratella</span>
                    </div>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="home-footer">
                <p>© 2024 GameStoreBR. Todos os direitos reservados.</p>
                <p>Siga-nos nas redes sociais:</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-707a142a3/?trk=opento_sprofile_goalscard" className="social-icon">Linkedin</a>
                    <a href="https://github.com/DevJoaoPedro01" className="social-icon">GitHub</a>
                    <a href="https://www.instagram.com/_jotape03/" className="social-icon">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;