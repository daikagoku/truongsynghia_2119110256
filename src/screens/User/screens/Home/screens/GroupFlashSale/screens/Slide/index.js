import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {createContext,useRef,useState,useMemo,useEffect} from 'react';
import './index.css';
import CardProductVertical from '../../../../../../components/CardProductVertical/';
import {NextButton,BackButton} from './Buttons/';
export const SlideContext = createContext();
export default function({listItem}){
	const [index,setIndex] = useState();
	const thisRef = useRef();
	const items = useMemo(function(){
		return listItem.map(function(item,index){
			return (<CardProductVertical prefix="group-flash-sale" data={item} index = {index} />)
		});
	},[listItem]);
	useEffect(function(){
		if(thisRef.current){
			setIndex(thisRef.current.state.activeIndex);
		}
	},[thisRef.current]);
	function handleSlideChanged(event){
		setIndex(event.item);
	};
  return (
  <SlideContext.Provider value={[thisRef.current,listItem]}>
    <div 	id="group-flash-sale">
	    	 		<AliceCarousel 
							ref = {thisRef}
							activeIndex={index}
							infinite
							disableDotsControls
							onSlideChanged={handleSlideChanged}
							disableDotsControls
							disableButtonsControls
							mouseTracking
							responsive = {
								{
									 0:{items:2},
									 600:{items:3},
									 800:{items:4},
									 1200:{items:5},
									 1400:{items:6}
								}
							}
							items={items}
						/>
	    	 		<BackButton />
		    	 	<NextButton />
    	 	</div>
    </SlideContext.Provider>
  );
}