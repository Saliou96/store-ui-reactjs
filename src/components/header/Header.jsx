import logo from '../../assets/header/logo.svg';
import heart from '../../assets/header/akar-icons_heart.svg';
import cart from '../../assets/header/ant-design_shopping-cart-outlined.svg';
import account from '../../assets/header/mdi_account-alert-outline.svg';
import search from '../../assets/header/akar-icons_search.svg';

function Header() {
    return (
        <>
            <div className="flex justify-between items-center px-20 py-5">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className="flex gap-20" >
                    <div><a href="">Home</a></div>
                    <div><a href="">Shop</a></div>
                    <div><a href="">About</a></div>
                    <div><a href="">Contact</a></div>
                </div>
                <div className="flex gap-10">
                    <img src={account} alt=""/>
                    <img src={search} alt=""/>
                    <img src={heart} alt=""/>
                    <img src={cart} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Header