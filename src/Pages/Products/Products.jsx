import React, { useState } from "react";
import Brick from "../../DataStore/Brick.json";
import Tiles from "../../DataStore/Tiles.json";

export default function Products() {
    const [productType, setProductType] = useState("Brick");
    const [products, setProducts] = useState(Brick);

    const handleProductChange = (e) => {
        const selected = e.target.value;
        setProductType(selected);
        setProducts(selected === "Tiles" ? Tiles : Brick);
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between mb-4 p-4 bg-[var(--var-red-col)] text-white shadow-sm space-y-2 sm:space-y-0">
                <span className="font-semibold text-lg">Select Your Product</span>

                <div className="relative">
                    <select
                        value={productType}
                        onChange={handleProductChange}
                        className="appearance-none w-48 sm:w-56 bg-white text-[var(--var-red-col)] font-medium border border-gray-200 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--var-red-col)]"
                    >
                        <option value="Brick">Bricks</option>
                        <option value="Tiles">Tiles</option>
                    </select>

                    <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[var(--var-red-col)]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path fillRule="evenodd" d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>


            <div className="max-h-screen w-full">
                <div className="overflow-x-auto shadow-md rounded">
                    <table className="min-w-full bg-[white] text-sm text-left text-gray-700">
                        <thead className=" text-[var(--var-red-col)] border-b-[1px] sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-3">#</th>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Shape</th>
                                <th className="px-6 py-3">Type</th>
                                <th className="px-6 py-3">Color</th>
                                <th className="px-6 py-3">Size</th>
                                <th className="px-6 py-3">Supply Ability</th>

                                <th className="px-6 py-3">Image</th>
                                <th className="px-6 py-3">  </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 overflow-y-auto max-h-[70vh]">
                            {products.map((tile, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 font-medium">{index + 1}</td>
                                    <td className="px-6 py-4">{tile.title}</td>
                                    <td className="px-6 py-4">{tile.shape}</td>
                                    <td className="px-6 py-4">{tile.productType}</td>
                                    <td className="px-6 py-4">{tile.color}</td>
                                    <td className="px-6 py-4">{tile.size}</td>
                                    <td className="px-6 py-4">{tile.supplyAbility}</td>

                                    <td className="px-6 py-4">
                                        <img
                                            src={tile.productImage}
                                            alt={tile.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-6 py-4"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
