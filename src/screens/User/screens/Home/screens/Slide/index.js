import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useRef,useState,useEffect,useReducer,useMemo} from 'react';
import './index.css';
import {SlideContext} from './init';
import SlideItem from './Item';
import SlideDots from './Dots';
import {NextButton,BackButton} from './Buttons';
export default function(){
	const thisRef = useRef();
	const [index,setIndex] = useState();
	const listItem = [
		{
			src:"/img/slide1.png"
		},{
			src:"/img/slide2.png"
		},{
			src:"/img/slide2.png"
		},{
			src:"/img/slide2.png"
		}
	];
	const items = listItem.map(function(item,index){
			return (<SlideItem data={item} index={index} />)
	})
	useEffect(function(){
		if(thisRef.current){
			setIndex(thisRef.current.state.activeIndex);
		}
	},[thisRef.current]);
	function handleSlideChanged(event){
		setIndex(event.item);
	}
  return (
    <section className="container-fluid  slide">
    	<div className="container">
    	 	<div className="row slide-container">
    	 	  <SlideContext.Provider value={[thisRef.current,listItem]}>
	    	 		<div id="main-slide">
		    	 		 <AliceCarousel 
							 		ref = {thisRef}
							 		activeIndex = {index}
							 		infinite
							 		autoPlay
							 		animationDuration={1000}
							 		autoPlayInterval={4000}
							 		disableDotsControls
							 		onSlideChanged={handleSlideChanged}
							 		disableDotsControls
							 		disableButtonsControls
							 		mouseTracking
							 		items={items}
							 />
							 <SlideDots />
							 <BackButton />
							 <NextButton />
		    	 	</div>
		    	</SlideContext.Provider>
    	 	</div>
    	</div>
    </section>
  );
}
