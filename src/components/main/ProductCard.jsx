function ProductCard({ product }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
            {/* Image et badge promo */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {product.discount}
          </span>
                )}
            </div>

            {/* Détails du produit */}
            <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description}</p>

                {/* Prix */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-black">{product.price}</span>
                    {product.oldPrice && (
                        <span className="text-gray-400 line-through">{product.oldPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;