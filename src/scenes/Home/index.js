import Header from './Header';
import Menu from './Menu';
import GroupFlashSale from './GroupFlashSale';
import GroupPost from './GroupPost';
import GroupTabProduct from './GroupTabProduct';
import Footer from './Footer';
export default function() {
	return(
		<>
			<Header />
			<Menu />
			<GroupFlashSale />
			<GroupTabProduct/>
			<GroupPost />
			<Footer />
		</>
	)
}