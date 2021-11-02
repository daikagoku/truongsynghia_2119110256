import Fetch from '../../core/Fetch';
import {List,Item,Button,Image,Link,Icon} from '../../tags/Tags';
import Thumbnail from '../thumbnail/Thumbnail';
import RatingStar from '../rating/RatingStar';
import './Product.css';

export function ProductTitle({title,alias,...props}){
	let text = "Đang cập nhật";
	if(title !== undefined){
		text = title;
	};
	return(
		<Link to={"/productdetail/"+alias}className="my-1 product-title">{text}</Link>
	)
};
export function ProductThumbnail({image,...props}){
	const thumbnailAttr = {
		...props,
		thumbnailClass:"inset-t-10"
	}
	return(
		<Thumbnail {...thumbnailAttr}>
    		<Image className="product-img img-contain"src={image}/>
    	</Thumbnail>
	)
};

export function ProductRootPrice({price,salePrice,...props}){
	let text= " ";
	if(price !== undefined && salePrice !== undefined){
		text=price+"$";
	};
	return(
		<span className="fs-1x fs-0 mx-1 product-price root">{text}</span>
	)
};
export function ProductCurrendPrice({price,salePrice,...props}){
	const _attr={
		text:"Liên hệ",
		className:"fs-1x fs-2 mx-1 product-price current"
	};
	if(salePrice !== undefined && price !== undefined){
		_attr.className+=" sale";
		_attr.text=salePrice+"$";
	}else if(price !== undefined){
		_attr.text=price+"$";
	};
	return(
		<span className={_attr.className}>{_attr.text}</span>
	)		
};
export function ProductBookmask({price,salePrice,...props}){
	if(price !== undefined && salePrice !== undefined){
		let percent = Math.round(100 - salePrice * 100 / price);
		let text ="Giảm "+percent+"%";
		return(
			<span className="product-boolmask fs-0x fs-8 px-2 position-absolute top-1 start-0 d-block">
				{text}
			</span>
		);
	}else{
		return(<></>)
	}
};
export function ProductRating({className,id,...props}){
	const ratings = Fetch({
		initData:[],
		keyApi :'rating',
		filter:(item)=>(item.position === 'product' && item.positionId === id)
	});
	const rating = ratings.reduce(function(total,item){
				return Number(total) + Number(item.vote);
	},0)/ratings.length || 0;
    function formatRating(results){
    	return Number.parseFloat(results).toFixed(1);
    };
	return(
		<div className={"product-rating-view d-flex align-items-center "+className}>
			<span className={"position-relative d-flex align-items-center mx-1 "}>
				<RatingStar className=""value="1"rating={rating}/>
				<RatingStar className=""value="2"rating={rating}/>
				<RatingStar className=""value="3"rating={rating}/>
				<RatingStar className=""value="4"rating={rating}/>
				<RatingStar className=""value="5"rating={rating}/>
			</span>
			<span className='fs-0x fs-8 d-flex align-items-center mx-1'>({formatRating(rating)})</span>
		</div>
	)
};
export function ProductOption({className,...props}){
		return(
			<List className={"m-0 p-0 fs-2 product-option opacity-10 opacity-md-0 "+className}>
    			<Item>
    				<Button className="product-option-btn m-1 m-md-2 ws-8em hs-8em">
    					<Icon className="far fa-heart"/>
    				</Button>
    			</Item>
				<Item>
    				<Button className="product-option-btn m-1 m-md-2 ws-8em hs-8em">
    					<Icon className="fas fa-align-left"/>
    				</Button>
    			</Item>
    			<Item>
    				<Button className="product-option-btn m-1 m-md-2 ws-8em hs-8em">
    					<Icon className="far fa-eye"/>
    				</Button>
    			</Item>
    			<Item>
    				<Button className="product-option-btn m-1 m-md-2 ws-8em hs-8em">
    					<Icon className="fas fa-cart-plus"/>
    				</Button>
    			</Item>    				
    		</List>
		);
};