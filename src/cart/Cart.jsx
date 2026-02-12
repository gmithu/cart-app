import React, { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import Button from "./Button";
import Input from "./Input";

export default function Cart() {
  const [items] = useState([
    {
      src: process.env.PUBLIC_URL + "/shw.jpg",
      rate: "29",
      name: "Brooks type1",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow.webp",
      rate: "25",
      name: "Brooks",
    },
    {
      src: process.env.PUBLIC_URL + "/sw.avif",
      rate: "30",
      name: "Brooks type1",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow1.jpg",
      rate: "35",
      name: "N-style",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow2.avif",
      rate: "38",
      name: "N-style",
    },
    {
      src: process.env.PUBLIC_URL + "/shoow3.jpg",
      rate: "38",
      name: "F-style",
    },
    {
      src: process.env.PUBLIC_URL + "/images.jpeg",
      rate: "30",
      name: "F-style",
    },
    {
      src: process.env.PUBLIC_URL + "/sl3.webp",
      rate: "33",
      name: "adidas",
    },
    {
      src: process.env.PUBLIC_URL + "/s-l2.jpg",
      rate: "33",
      name: "adidas",
    },
    {
      src: process.env.PUBLIC_URL + "/taflu.webp",
      rate: "29",
      name: "reebooke",
    },
    {
      src: process.env.PUBLIC_URL + "/tafly.webp",
      rate: "29",
      name: "reebooke",
    },
    {
      src: process.env.PUBLIC_URL + "/unas.webp",
      rate: "26",
      name: "pouma1",
    },
    {
      src: process.env.PUBLIC_URL + "/unas1.jpg",
      rate: "26",
      name: "pouma2",
    },
    {
      src: process.env.PUBLIC_URL + "/puma.jpg",
      rate: "22",
      name: "pouma2",
    },
    {
      src: process.env.PUBLIC_URL + "/reebook.jpeg",
      rate: "29",
      name: "reebook",
    },
  ]);
  const [filterdUser, setFilterdUser] = useState(items);

  const [Cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Cart));
  }, [Cart]);

  const [select, setSelect] = useState(null);
  const [selectOrder, setSelectOrder] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobilError, setMobilError] = useState("");
  const [addressError, setAddressError] = useState("");

  function countclick(index) {
    const selectedItem = filterdUser[index];
    setCart((prevCart) => [...prevCart, selectedItem]);
  }

  function handlestart(search) {
    if (search.trim() !== "") {
      const filterd = items.filter((e) =>
        e.name.toLowerCase().startsWith(search.toLowerCase()),
      );

      setFilterdUser(filterd);
    } else {
      setFilterdUser(items);
    }
  }

  function filterd(index) {
    const udtcart = Cart.filter((_, i) => i !== index);
    setCart(udtcart);
  }

  function handlePlaceOrder() {
    if (address.trim() !== "" && mobile.trim() !== "") {
      setOrderSuccess(true);
      setSelectOrder(null);
      setAddress("");
      setMobile("");
      setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
    }
    if (mobile.trim() === "") {
      setMobilError("red-500");
    } else {
      setMobilError("");
    }

    if (address.trim() === "") {
      setAddressError("red-500");
    } else {
      setAddressError("");
    }
  }

  return (
    <div className="flex flex-col w-full h-screen p-6 gap-6 items-center bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="flex w-full justify-start items-center gap-4 bg-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-all hover:scale-110">
            <span className="text-3xl">🛍️</span>
          </div>
          <h1 className="flex justify-center items-center font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shoo Cart
          </h1>
        </div>

        {/* input */}

        <Input onChange={(e) => handlestart(e.target.value)} />
        
      </div>

      <div className="flex flex-1 w-full gap-6 px-6 ">
        <div className="flex-1 max-h-[760px] rounded-2xl gap-20 flex flex-wrap bg-gradient-to-br from-sky-50 to-blue-50 justify-center p-6 items-start overflow-y-auto shadow-inner">
          {filterdUser.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center text-gray-400 text-xl font-semibold py-24">
              <span>🕵️‍♂️</span>
              <span>No items found.</span>
            </div>
          ) : (
            filterdUser.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
                style={{ width: "256px" }}
              >
                <div
                  className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 shadow-inner"
                  style={{ height: "176px" }}
                >
                  <img
                    src={value.src}
                    className="w-full h-full object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                    onClick={() => setSelect(value)}
                    alt={value.name}
                  />
                </div>
                <div className="w-16 bg-gradient-to-r from-amber-400 to-orange-500 text-white h-7 rounded-full flex justify-center items-center font-bold shadow-md mt-2 text-sm">
                  ${value.rate}
                </div>
                <div className="flex flex-col gap-3 p-2 items-center w-full">
                  <h1 className="text-gray-700 font-semibold text-center text-sm truncate w-full">
                    {value.name}
                  </h1>

                  {/* add cart button */}

                  <Button variant="filled" onClick={() => countclick(index)}>
                    🛒 Add Cart
                  </Button>

                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex h-3/4 ">
          <div className="w-96 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex p-5 overflow-auto flex-col gap-4 shadow-xl border border-gray-200 h-[760px]">
            <div className="text-gray-700 font-extrabold text-2xl sticky top-0 bg-gradient-to-r from-gray-50 to-gray-100 pb-3 border-b-2 border-gray-300 z-10 flex items-center gap-2">
              <span className="text-3xl">🛒</span>
              <span>Cart Items</span>
              <span className="ml-auto bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {Cart.length}
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {Cart.length === 0 ? (
                <li className="flex flex-col items-center justify-center text-gray-400 text-xl font-semibold py-12">
                  <span className="text-4xl">🛒</span>
                  <span>No items in cart.</span>
                </li>
              ) : (
                Cart.map((value, index) => (
                  <li
                    key={index}
                    className="flex flex-col rounded-2xl p-4 bg-white shadow-md hover:shadow-lg transition-all border border-gray-200 gap-3"
                  >
                    <div className="flex gap-3">
                      <img
                        src={value.src}
                        alt={value.name}
                        className="w-24 h-20 rounded-xl object-cover shadow-sm border-2 border-gray-100"
                      />
                      <div className="flex-1 flex flex-col justify-center gap-1">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {value.name}
                        </h3>
                        <p className="text-2xl font-bold text-green-600">
                          ${value.rate}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="filled"
                        onClick={() => {
                          setSelectOrder(value);
                        }}
                      >
                        📦 Place Order
                      </Button>
                      {/* delete item button */}
                      <Button variant="danger" onClick={() => filterd(index)}>
                        <span className="text-2xl">🗑️</span>
                      </Button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        {select && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-[520px] shadow-2xl flex flex-col overflow-hidden transform transition-all relative">
              {/* Close Button */}
              <CloseButton onClick={() => setSelect(null)}>×</CloseButton>

              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-6">
                <img
                  src={select.src}
                  className="w-full h-64 object-contain rounded-2xl"
                  alt={select.name}
                />
                {/* Price Badge */}
                <div className="absolute bottom-8 left-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl font-bold">${select.rate}</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {select.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Brand:</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {select.name}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="filled"
                    onClick={() => {
                      setCart((prevCart) => [...prevCart, select]);
                      setSelect(null);
                    }}
                  >
                    🛒 Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm">
            <div className="w-[480px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white relative">
                <CloseButton onClick={() => setSelectOrder(null)}>
                  ×
                </CloseButton>
                <h2 className="text-2xl font-bold">Complete Your Order</h2>
                <p className="text-green-100 text-sm mt-1">
                  Fill in your delivery details
                </p>
              </div>

              {/* Order Summary */}
              <div className="px-6 py-4 bg-gradient-to-b from-green-50 to-white border-b">
                <div className="flex items-center gap-4">
                  <img
                    src={selectOrder.src}
                    alt={selectOrder.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md border-2 border-green-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">
                      {selectOrder.name}
                    </h3>
                    <p className="text-2xl font-bold text-green-600 mt-1">
                      ${selectOrder.rate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    📍 Delivery Address
                  </label>
                  <textarea
                    className="border-2 border-gray-300 rounded-xl p-3 h-24 focus:border-green-500 focus:outline-none transition-colors resize-none bg-gray-50 hover:bg-white"
                    placeholder="Enter your complete address..."
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setAddressError("");
                    }}
                    style={{ borderColor: addressError ? "red" : "" }}
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    📱 Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="border-2 border-gray-300 rounded-xl p-3 focus:border-green-500 focus:outline-none transition-colors bg-gray-50 hover:bg-white"
                    placeholder="Enter your mobile number..."
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      setMobilError("");
                    }}
                    style={{ borderColor: mobilError ? "red" : "" }}
                  />
                </div>

                <div className="flex gap-3 mt-2">
                  <Button variant="filled" onClick={handlePlaceOrder}>
                    🎉 Place Order
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setSelectOrder(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {orderSuccess && (
          <div className="fixed top-6 right-6 z-[60] animate-slide-in">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-green-500 p-6 min-w-[320px] flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✅</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  Order Placed Successfully!
                </h3>
                <p className="text-sm text-gray-600">
                  Thank you for your order. We'll deliver it soon!
                </p>
              </div>
              <CloseButton onClick={() => setOrderSuccess(false)}>
                ×
              </CloseButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
