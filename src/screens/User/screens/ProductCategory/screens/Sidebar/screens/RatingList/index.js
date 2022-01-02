import {memo,useState} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import RatingItem from "../../components/Item/";
import {List,RatingGroup} from "../../../../../../../../components/";
function RatingList({...props}){
	const [indexCheck,setIndex] = useState(-1);
	const listItem = [1,2,3,4,5];
	return(
		<List>
			{
				listItem.map(function(item,index){
					let isCheck = (item === indexCheck);
					let setCheck = function(value){
						if(value === true){
							setIndex(item);
						}else{
							setIndex(-1);
						}
					}
					return (
						<RatingItem key={index} isCheck={isCheck} setCheck={setCheck}>
							<RatingGroup rating={item}/>
						</RatingItem>
					)
				})
			}
		</List>
	)
}
export default memo(RatingList);