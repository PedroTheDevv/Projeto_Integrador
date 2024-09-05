// Admin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    // Estado inicial de produtos (pode ser substituído por dados reais do backend)
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Assassin's Creed Mirage - PS5 (Mídia Física)",
            price: "R$199,90",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSu4KW8y61tjr-5BgYCpmoy5sXW56sCmUCaiLapWpT8crnnDpA5OxRLRkSa4RvQAnpHVvFXw-HrxyTWxous01Nw6-NOBprB6Q&usqp=CAE"
        },
        // Adicione mais produtos conforme necessário
    ]);

    // Função para deletar um produto
    const deleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <div className="admin-container">
            {/* Cabeçalho */}
            <header className="admin-header">
                <div className="admin-logo">Admin Dashboard</div>
                <nav className="admin-nav">
                    <Link to="/admin" className="admin-nav-link">Dashboard</Link>
                    <Link to="/admin/products" className="admin-nav-link">Gerenciar Produtos</Link>
                    <Link to="/admin/users" className="admin-nav-link">Gerenciar Usuários</Link>
                    <Link to="/login" className="admin-nav-link">Logout</Link>
                </nav>
            </header>

            {/* Seção de Gerenciamento de Produtos */}
            <section className="admin-products">
                <h2 className="section-title">Gerenciar Produtos</h2>
                <Link to="/admin/add-product" className="cta-button">Adicionar Novo Produto</Link>
                <div className="admin-product-list">
                    {products.map(product => (
                        <div key={product.id} className="admin-product-card">
                            <img src={product.image} alt={product.title} className="admin-product-image" />
                            <div className="admin-product-details">
                                <h3 className="admin-product-title">{product.title}</h3>
                                <p className="admin-product-price">{product.price}</p>
                                <div className="admin-product-actions">
                                    <Link to={`/admin/edit-product/${product.id}`} className="admin-action-button">Editar</Link>
                                    <button onClick={() => deleteProduct(product.id)} className="admin-action-button delete-button">Deletar</button>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default Admin;
