import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Stok</th>
            <th className="text-right">Harga</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td align="center">{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td className="text-right">{product.price}</td>
              <td className="text-center">
                <Link to="/detail" className="btn btn-sm btn-info">
                  Detail
                </Link>
                <Link to="/edit" className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <Link to="#" className="btn btn-sm btn-danger">
                  Hapus
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
