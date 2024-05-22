import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectCategories } from "../../redux/categorySlice";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from "axios";
import axiosInstance from "@/utils/axiosInstance";
import app from "@/utils/firebase"; // Import Firebase app instance

export default function PanelAddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [includes, setIncludes] = useState([]);
  const [details, setDetails] = useState([]);
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [stockNumber, setStockNumber] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleIncludesChange = (event) => {
    setIncludes(event.target.value.split("\n"));
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value.split("\n"));
  };

  const handleImageChange = (event) => {
    setImages(event.target.files);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleStockNumberChange = (event) => {
    setStockNumber(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddProduct = async () => {
    try {
      const imagesUrls = await Promise.all(
        Array.from(images).map(async (image) => {
          const storageRef = ref(app, `images/${image.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image);
            console.log(uploadTask)
          return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                // setProgress(progress);
              },
              (error) => {
                console.error('Error uploading image: ', error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
                  resolve(downloadURL);
                });
              }
            );
          })
        })
      );
      
      const productData = {
        name: productName,
        stock: stockNumber,
        includes,
        details,
        category: selectedCategory,
        images: imagesUrls,
        price,
      };

      // Send product data to your backend API
      await axiosInstance.post("http://localhost:4000/api/v1/products/add", productData);

      console.log("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <dialog id="addProduct" className="modal p-4">
      <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-full lg:w-[800px]">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl satoshi-bold">ADD PRODUCT</h4>
          <form method="dialog">
            <button>&#x2715;</button>
          </form>
        </div>
        <div className="flex flex-col w-full mt-8 gap-6">
          <div className="w-full flex gap-3">
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              id="imageInput"
              multiple
            />
            <label
              htmlFor="imageInput"
              className="rounded-md bg-[#cdcdcd] min-w-[200px] h-[200px] cursor-pointer"
            >
              {images.length > 0 ? (
                <p className="text-white text-center pt-8">
                  {images.length} Images Selected
                </p>
              ) : (
                <p className="text-white text-center pt-8">Upload Images</p>
              )}
            </label>
            <div className="flex flex-col gap-3 w-full">
              <label className="w-full input input-bordered input-sm bg-[#333333] flex items-center gap-2">
                <input
                  type="text"
                  className="grow placeholder:text-[#888]"
                  placeholder="Product Name"
                  value={productName}
                  onChange={handleProductNameChange}
                />
              </label>
              <textarea
                type="text"
                onChange={handleDetailsChange}
                className="resize-none min-h-[80px] text-[15px] rounded-md bg-[#333333] border border-[#4A4C4E] placeholder:text-[#888] w-full p-2 px-3"
                placeholder="Description"
              />
              <div className="flex gap-3 w-full">
                <textarea
                  onChange={handleDetailsChange}
                  className="resize-none min-h-[80px] text-[15px] rounded-md bg-[#333333] border border-[#4A4C4E] placeholder:text-[#888] w-full p-2 px-3"
                  placeholder="Details (Enter one detail per line)"
                />
                <textarea
                  onChange={handleIncludesChange}
                  className="resize-none min-h-[80px] text-[15px] rounded-md bg-[#333333] border border-[#4A4C4E] placeholder:text-[#888] w-full p-2 px-3"
                  placeholder="Includes (Enter one item per line)"
                />
              </div>
              <label className="w-full input input-bordered input-sm bg-[#333333] flex items-center gap-2">
                <input
                  type="text"
                  className="grow placeholder:text-[#888]"
                  placeholder="Stock"
                  value={stockNumber}
                  onChange={handleStockNumberChange}
                />
              </label>
              <label className="w-full input input-bordered input-sm bg-[#333333] flex items-center gap-2">
                <input
                  type="text"
                  className="grow placeholder:text-[#888]"
                  placeholder="Price"
                  value={price}
                  onChange={handlePriceChange}
                />
              </label>
              <select
                className="select select-sm placeholder:text-[#888] bg-[#333333]"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleAddProduct}
            className="satoshi-medium bg-emerald-900 hover:bg-emerald-800 duration-300 px-4 py-2 text-[14px] rounded-md flex gap-2 justify-center items-center"
          >
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
