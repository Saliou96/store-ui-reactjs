import cat1 from "../../assets/main/image 101.png";
import cat2 from "../../assets/main/image 100.png";
import cat3 from "../../assets/main/image 106.png";

function Category() {
    const images = [
        {src: cat1, label: "Bedroom"},
        {src: cat2, label: "Living"},
        {src: cat3, label: "Dining"},
    ];
    return (
        <>

            <div className="flex flex-col justify-center items-center py-10">
                <div className="text-3xl font-bold">Browse The Range</div>
                <div className="text-xl pt-2 font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                {images.map((item, index) => (
                    <div key={index} className="w-1/5 text-center">
                        <img src={item.src} alt={`Image ${index + 1}`} className="rounded-lg"/>
                        <p className="mt-5 text-gray-700 font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Category;