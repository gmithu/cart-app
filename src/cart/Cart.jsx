import React, { useState, useEffect } from "react";

export default function Cart() {
  const [items, setItems] = useState([
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
  const [searchinput, setSearchinput] = useState("");
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

  function countclick(index) {
    const selectedItem = filterdUser[index];
    setCart((prevCart) => [...prevCart, selectedItem]);
  }

  function handlestart(search) {
    if (search.trim() !== "") {
      const filterd = items.filter((e) =>
        e.name.toLowerCase().startsWith(search.toLowerCase())
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

  return (
    <div className="flex flex-col w-full h-screen  p-6 gap-6 items-center ">
      <div className=" flex w-full justify-start ">
        <h1 className=" flex w-40 justify-center items-center font-serif text-2xl text-yellow-500 ">
          shoow Cart
        </h1>
        <input
          type="text"
          className=" bg-gray-300 w-3/4 h-11 rounded-2xl  "
          placeholder="    Search Items"
          onChange={(e) => {
            setSearchinput(e.target.value);
            handlestart(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-1 w-full gap-6 px-6 ">
        <div className="flex-1 max-h-[760px] rounded-2xl gap-9 flex flex-wrap bg-sky-100 justify-center p-6 items-start overflow-y-auto ">
          {filterdUser.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={value.src}
                className="h-44 w-60 border-amber-400 border rounded-3xl cursor-pointer hover:scale-105 transition"
                onClick={() => setSelect(value)}
              />{" "}
              <div className="w-16 bg-amber-200 h-7 rounded-b-full flex justify-center hover:text-2xl font-serif ">
                {value.rate} <span className="text-yellow-600">$</span>
              </div>
              <div className="flex flex-col gap-3 p-1">
                {" "}
                <h1 className="text-gray-500 font-semibold">{value.name}</h1>
                <button
                  className="bg-gray-200 p-1 text-green-500 rounded-s-full w-32"
                  onClick={() => {
                    countclick(index);
                  }}
                >
                  🛒 Add Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-3/4 ">
          <div className=" w-96 h-96 rounded-3xl bg-gray-100 flex p-4 overflow-auto  flex-col gap-3 border-4 h-[760px]">
            <div className=" text-gray-400 font-extrabold text-2xl sticky top-0 bg-gray-100 ">
              🛒Items ({Cart.length})
            </div>

            <ul className="flex flex-col gap-2">
              {Cart.map((value, index) => (
                <li
                  key={index}
                  className="flex  h-24 rounded-2xl p-2 bg-sky-100 justify-between font-bold text-gray-500"
                >
                  <div>
                    <img
                      src={value.src}
                      alt={value.name}
                      className="w-16 h-10 rounded-lg"
                    />
                    <span>
                      {" "}
                      {value.name}-{value.rate}
                      <span className="text-yellow-500 font-serif">$</span>
                    </span>
                  </div>

                  <div className="flex items-end  flex-col gap-2">
                    <button
                      className="text-green-500 border h-10 w-32 border-green-500 rounded-xl "
                      onClick={() => {
                        setSelectOrder(value);
                      }}
                    >
                      place order
                    </button>
                    <button
                      className="  text-white bg-red-500 flex w-32 h-8 rounded-xl items-center justify-center "
                      onClick={() => {
                        filterd(index);
                      }}
                    >
                      Cancel order
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {select && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
            <div className="bg-white rounded-2xl p-5 h-[460px] gap-2 w-[540px] shadow-2xl  flex flex-col items-center relative">
              <button
                className=" w-96 flex justify-end  font-bold text-red-500"
                onClick={() => {
                  setSelect(null);
                }}
              >
                x
              </button>
              <img src={select.src} className="w-96  h-60 rounded-xl border" />
              <p className="font-serif">
                {select.rate}{" "}
                <span className="text-orange-300 font-mono">$</span>
              </p>
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-gray-700">
                  <span className="text-blue-400">Brand: </span> {select.name}
                </h1>
                <button
                  className="w-56  rounded-s-full h-12 bg-gray-200 text-green-500"
                  onClick={() => {
                    setCart((prevCart) => [...prevCart, select]);
                  }}
                >
                  🛒 Add Cart
                </button>
              </div>
            </div>
          </div>
        )}
        {selectOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-end items-center z-50 p-16 ">
            <div className="w-96 h-72 bg-gray-300 rounded-xl flex justify-center items-center flex-col gap-4 ">
              <p
                className="flex w-72 justify-end text-red-500  text-2xl font-bold "
                onClick={() => {
                  setSelectOrder(null);
                }}
              >
                x
              </p>
              <div className="flex flex-col gap-2">
                address <textarea className="border h-16"></textarea>
                mobile number{" "}
                <input type="text" className="border rounded-lg" />       
              </div>

              <button className="border rounded-lg w-20 h-8 text-green-400 border-green-500  cursor-pointer">
                submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
