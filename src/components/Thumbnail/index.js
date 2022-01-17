import {forwardRef,memo,useState,useMemo} from 'react';
import clsx from 'clsx';
import './index.css';
import LoadingDualRing from '../Loading/LoadingDualRing/';
const Thumbnail = function({children,className,thumbnailClass,prefix,...props},ref){
		const [isLoad,setLoad] = useState(false);
		const thumbnailAttr = {
			...props,
			ref:ref,
			className:"thumbnail"
		};
		thumbnailAttr.onLoadStart = useMemo(function(){
			return function(event){
				setLoad(true);
			}
		},[isLoad]);
		thumbnailAttr.onLoad = useMemo(function(){
			return function(event){
				setLoad(false);
			}
		},[isLoad])
		if(className !== undefined){
			thumbnailAttr.className+=" "+className;
		};
		if(prefix !== undefined){
			thumbnailAttr.className+=" "+prefix+"_thumbnail";
		};
		return(
			<div {...thumbnailAttr}>
				<div className={"thumbnail-container "+thumbnailClass}>
					<div className={clsx("thumbnail-content",{loaded:!isLoad})}>
						{children}
					</div>
					{isLoad && <LoadingDualRing />}
				</div>
			</div>
		);
};
export default memo(forwardRef(Thumbnail));