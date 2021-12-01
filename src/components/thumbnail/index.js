import {forwardRef,memo,useEffect,useState} from 'react';
import clsx from 'clsx';
import './index.css';
import LoadingDualRing from '../Loading/LoadingDualRing/';
const Thumbnail = function({children,className,thumbnailClass,prefix,...props},ref){
		const [loaded,setLoaded] = useState(false);
		const thumbnailAttr = {
			...props,
			className:"thumbnail",
			onLoad:function(event){
				setLoaded(true);
			}
		};
		if(className !== undefined){
			thumbnailAttr.className+=" "+className;
		};
		if(prefix !== undefined){
			thumbnailAttr.className+=" "+prefix+"_thumbnail";
		}
		return(
			<div ref={ref}{...thumbnailAttr}>
				<div className={"thumbnail-container "+thumbnailClass}>
					<div className={clsx("thumbnail-content",{load:loaded})}>
						{children}
					</div>
					{loaded === false && <LoadingDualRing />}
				</div>
			</div>
		);
};
export default memo(forwardRef(Thumbnail));