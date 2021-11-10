import {useContext,memo,useMemo} from 'react';
import {SlideContext} from '../init';
import {List,Item,Button} from '../../../../tags';
import './index.css'
function MainSlideIndicators({...props}){
	const [state,dispatch] = useContext(SlideContext);
	const listItem = useMemo(function(){
		const newArr = [];
		for(let i = 0 ;i < state.totalIndex ; i++){
			newArr.push("");
		};
		return newArr;
	},[state.totalIndex]);
	function handleClick(num){
		dispatch({
			key:'set_index',
			value:num
		})
	};
	return(
		<List listItem={listItem}
			className="main-slide-indicators">
			{
				function(_item,_index){	
					let __className = _index===state.index?"active":"";
			
					return(
					<Item className="mx-1"key={_index}>
						<Button 
							className={"slide-indicator main-slide-indicator square-btn "+__className}
							onClick={()=>(handleClick(_index))}
						>							
						</Button>
					</Item>
				)}
			}
		</List>
	)
}
export default memo(MainSlideIndicators);