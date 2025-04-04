import pub from '../../assets/main/scandinavian-interior-mockup-wall-decal-background 1.png';

import Category from "./Category.jsx";
import ProductsList from "./ProductsList.jsx";

function Main() {

    return (
        <>
            <div className="flex flex-col pb-20">
                {/*PUB*/}
                <div className="w-full">
                    <img src={pub} alt=""/>
                </div>

                {/*CATEGORY*/}
                <Category/>
                <ProductsList/>
            </div>
        </>
    )
}

export default Main