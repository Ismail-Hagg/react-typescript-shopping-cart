import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function Navbar() {

  const {cartQuantity,openCart,closeCart} = useContext(ShoppingCartContext)
  
  return (

    <nav className="px-4 py-2 bg-white shadow md:flex md:items-center md:justify-between sticky top-0">
      <div>
        <Link
          to="/"
          className="text-xl font-[Poppins] px-4 hover:text-slate-400 duration-300"
        >
          Home
        </Link>
        <Link
          to="/store"
          className="text-xl font-[Poppins] px-4 hover:text-slate-400 duration-300"
        >
          Store
        </Link>
        <Link
          to="/about"
          className="text-xl font-[Poppins] px-4 hover:text-slate-400 duration-300"
        >
          About
        </Link>
      </div>
      {cartQuantity>0 &&(
        <button onClick={() => openCart} className="w-16 h-16 border-blue-700 border rounded-full relative hover:bg-blue-500 duration-300">
        <svg
          className="fill-blue-500 hover:fill-white m-2 duration-300"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 902.86 902.86"
        >
          <g>
            <g>
              <path
                d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
              />
              <path
                d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
            			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
            			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
            			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
            			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
            			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
            			S619.162,694.432,619.162,716.897z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <div className="rounded-full bg-red-500 h-6 w-6 absolute text-white bottom-0 right-0 translate-x-1/4 translate-y-1/4">{cartQuantity}</div>
      </button>
      )}
    </nav>
  );
}
