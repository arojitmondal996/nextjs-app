"use client";

import { postSingleData } from "@/app/actions/products/postSingleProduct";
import { useRouter } from "next/navigation";

const ProductAddForm = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const payload = { productName }
        // const res = await fetch("http://localhost:3000/api/items", {
        //     method: "POST",
        //     body: JSON.stringify(payload),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // const result = await res.json();
        const result = await postSingleData(payload);
        console.log(result);
        form.reset();
        // alert("Product Added");
        router.push("/products")
        router.refresh()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="productName" placeholder='Product' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ProductAddForm;