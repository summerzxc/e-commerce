import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectProducts } from "../../redux/productSlice";

import ProductCard from "../_atom/ProductCard";
import ProductFilter from "../_atom/ProductFilter";

export default function CardContainer({
  toggle,
  visible,
  searchTerm,
  selectedCategory,
}) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log(products);
  console.log(selectedCategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = products.filter(
        (product) => product.category === selectedCategory
      );
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  return (
    <div className="w-full flex flex-col gap-4">
      <ProductFilter toggle={toggle} visible={visible} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 gap-y-8">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
