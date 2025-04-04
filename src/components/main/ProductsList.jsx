import im1 from "../../assets/main/image 1.png";
import im2 from "../../assets/main/image 9.png";
import ProductCard from "./ProductCard.jsx";

function ProductsList() {
    const products = [
        {
            id: 1,
            image: im1,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
            discount: "-30%",
        },
        {
            id: 2,
            image: im2,
            name: "Leviosa",
            description: "Modern sofa",
            price: "Rp 4.200.000",
            oldPrice: "Rp 5.000.000",
            discount: "-20%",
        },
        {
            id: 1,
            image: im1,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
            discount: "-30%",
        },
        {
            id: 2,
            image: im2,
            name: "Leviosa",
            description: "Modern sofa",
            price: "Rp 4.200.000",
            oldPrice: "Rp 5.000.000",
            discount: "-20%",
        },
        {
            id: 1,
            image: im1,
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
            discount: "-30%",
        },
        {
            id: 2,
            image: im2,
            name: "Leviosa",
            description: "Modern sofa",
            price: "Rp 4.200.000",
            oldPrice: "Rp 5.000.000",
            discount: "-20%",
        },
    ];
    return (
        <>

            <div className="flex flex-col justify-center items-center py-10">
                <div className="text-3xl font-bold">Our Products</div>
            </div>

            <div className="flex flex-wrap justify-center gap-20">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}

export default ProductsList;