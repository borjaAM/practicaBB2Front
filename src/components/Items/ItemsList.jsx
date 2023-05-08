import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = {
    post: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": ``
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    headers.post.Authorization = `Bearer ${token}`
    console.log("token", token)
    console.log("headers", headers)
    if (!token) {
        return;
    }
    const fetchProducts = async () => {
      try {
        await axios.get("http://localhost:8080/api/items", {headers})
        .then((response) => {
            console.log(response.data);
            setProducts(response.data);
            setLoading(false);
        })
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProducts();
  }, []);
/**
  if (loading) {
      return <p>Cargando...</p>
  }
*/
  const handleLogout = () => {
    // Aquí se debe eliminar cualquier información de sesión almacenada y redirigir al usuario a la página de inicio de sesión
    console.log("/logout");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Lista de productos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default ProductList;
