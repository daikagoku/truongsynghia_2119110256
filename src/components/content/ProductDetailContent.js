import ProductDetail from '../productdetail/ProductDetail';
export default  function ProductDetailContent({history,location,match,children,...props}){
	const args = location.pathname.split('/');
	return(
		<>
			<ProductDetail alias = {args[2]}/>
			{children}
		</>
	)
}