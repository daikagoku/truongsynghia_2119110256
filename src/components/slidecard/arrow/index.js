import {useContext} from "react";
import {AppContext} from '../init';
import {List,Item,Button,Icon} from '../../tags';
import "./index.css";
export default function GroupSlideArrow() {
	const [state,dispatch] = useContext(AppContext);
	function handleDown(event){
		let movement = 0;
		const btn = event.target.closest('.group-slide-card-arrow');
		if(btn.classList.contains('back')){
			movement = -state.offsetWidth;
		}else if(btn.classList.contains('next')){
			movement = state.offsetWidth;
		}
		dispatch({
            key:'set_scroll',
            value: state.scrollLength + movement
        })
	};
	const back = state.scrollLength < state.offsetWidth ?" disabled":"";
	const next = state.scrollLength > state.scrollWidth - state.offsetWidth?" disabled":"";
    return (
        <List className="group-slide-card-arrows">
	    		<Item className=" d-flex">
	    			 <Button 
	    			 	className={"group-slide-card-arrow circle-btn back"+back}
	    			 	onClick={handleDown}
	    			 >
	    			 	<Icon className="fas fa-chevron-left"/>
	    			 </Button>
	    		</Item>
	    		<Item className=" d-flex">
	    			 <Button 
	    			 	className={"group-slide-card-arrow circle-btn next"+next}
	    			 	onClick={handleDown}
	    			 >
	    			 	<Icon className="fas fa-chevron-right"/>
	    			 </Button>
	    		</Item>
	    </List>
    );
  };

