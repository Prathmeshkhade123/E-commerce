import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, SetError] = useState(false);

  const addProduct = async () => {
    console.warn(!name); //-->agar name me data nai hai to vo true return karenga in the consolwe
    if (!name || !price || !category || !company) {
      SetError(true);
      return false;
    }
    //
    console.warn(name, price, category, company);
    //local storage se ID nikal ne ke liye code
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = (await result).json();
    console.warn(result);
  };

  return (
    <div className="addproduct">
      <h1>Add Product </h1>
      <input
        type="text"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      ></input>
      {error && !name && (
        <span className="invalid-input">Enter Valid name</span>
      )}
      <input
        type="text"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="enter price"
      ></input>
      {error && !price && (
        <span className="invalid-input">Enter Valid Price</span>
      )}

      <input
        type="text"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="enter category"
      ></input>
      {error && !category && (
        <span className="invalid-input">Enter Valid Category</span>
      )}

      <input
        type="text"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="enter company"
      ></input>
      {error && !company && (
        <span className="invalid-input">Enter Valid Company</span>
      )}
      <button onClick={addProduct} className="appbutton">
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
