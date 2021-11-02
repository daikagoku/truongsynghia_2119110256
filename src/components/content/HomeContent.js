import MainSlide from '../slide/MainSlide';
import GroupCardProduct from '../group/GroupCardProduct';
import GroupCardPost from '../group/GroupCardPost';
export default  function HomeContent({children,...props}){
	return(
		<>
			<MainSlide />
            <GroupCardProduct 
                title="Khuyến mãi"
            />
            <GroupCardPost
                title="Tin tức"
            />
			{children}
		</>
	)
}