import {useContext,memo} from 'react';
import {SlideContext} from '../init';
import {List,Item,Button,Icon} from '../../../../tags';
import './index.css';
function MainSlideButtons({...props}){
	const [state,dispatch] = useContext(SlideContext);
	function handleClick(num){
		dispatch({
			key:'set_index',
			value:state.index + num
		})
	};
	return(
		<List className="main-slide-buttons">
			<Item className="">
				<Button onClick={()=>(handleClick(-1))} 
					className="slide-button main-slide-button circle-btn back">
					<Icon className="fas fa-chevron-left"></Icon>
				</Button>
			</Item>
			<Item className="">
				<Button onClick={()=>(handleClick(1))} 
					className="slide-button main-slide-button circle-btn next">
					<Icon className="fas fa-chevron-right"></Icon>
				</Button>
			</Item>
		</List>)	
}
export default memo(MainSlideButtons);