import { useEffect, useState } from 'react'
import axios from 'axios'

export const Fetchapi = () => {
    const [products, setProducts] = useState([])
    // const [addProduct,setaddProduct] = useState([])

    async function fetchMethod() {
        try {
            const res = await axios.get("https://ecommerce-practice-chi.vercel.app/api/v1/product")
            console.log(res.data)
            setProducts(res.data.data)
        } catch (error) {
            console.error("Error fetching the data", error)
        }
    }

    useEffect(() => {
        fetchMethod()
    }, [])

    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            {products.length > 0 ? (
                <div className="flex flex-wrap -mx-2">
                    {products.map((data, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 w-full sm:w-1/2 lg:w-1/3">
                            <h2 className="text-xl font-semibold">{data.name}</h2>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-2" >Add to Cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    )
}
