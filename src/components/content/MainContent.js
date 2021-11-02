export default  function MainContent({children,...props}){
	return(
		<section className="main container-fluid">
			<div className="container py-2">
				{children}
			</div>
		</section>
	)
}