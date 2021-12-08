import {forwardRef,memo,useState} from 'react';
import clsx from 'clsx';
import './index.css';
import LoadingDualRing from '../Loading/LoadingDualRing/';
const Thumbnail = function({children,className,thumbnailClass,prefix,...props},ref){
		const [load,setLoad] = useState('load');
		const thumbnailAttr = {
			...props,
			ref:ref,
			className:"thumbnail",
			onLoad:function(event){
				setLoad('loaded');
			}
		};
		if(className !== undefined){
			thumbnailAttr.className+=" "+className;
		};
		if(prefix !== undefined){
			thumbnailAttr.className+=" "+prefix+"_thumbnail";
		};
		return(
			<div {...thumbnailAttr}>
				<div className={"thumbnail-container "+thumbnailClass}>
					<div className={clsx("thumbnail-content",{load:load === 'loaded'})}>
						{children}
					</div>
					{load === 'load' && <LoadingDualRing />}
				</div>
			</div>
		);
};
export default memo(forwardRef(Thumbnail));