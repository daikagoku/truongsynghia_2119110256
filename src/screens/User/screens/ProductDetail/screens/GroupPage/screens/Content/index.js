import {memo,useContext,useEffect} from 'react';
import clsx from 'clsx';
import useReponsive from '../../../../../../../../core/useReponsive';
import {List,Item} from '../../../../../../../../components/';
import CardProductVertical from '../../../../../../components/CardProductVertical/';
import styles from './index.module.css';
import {PageContext} from '../../init';
function HomePageContent({listItem,...props}){
    const [reponsive] = useReponsive();
	const [state,dispatch] = useContext(PageContext);
	useEffect(function(){
        function setViewItem(int){
            console.log("home-page change limit to "+int,reponsive.state.width)
            dispatch({
                key:'set_limit',
                value:int
            })
        };
    	switch(reponsive.state.width){
            case "xs":
            case "md":
            case "lg":
            case "xl":
                setViewItem(8)
                break;
            case "xxl":
                setViewItem(12)
                break;
        }
    },[reponsive.state.width]);
	return(
		<List className={clsx("d-flex flex-wrap",styles.list)}>
			{
				listItem.map(function(item,index){
					return(
					<Item key={index}className={clsx("col col-6 col-sm-6 col-md-4 col-xl-3 px-1 py-1")}>
						<CardProductVertical prefix="group-flash-sale" data={item} index = {index} />
					</Item>
					)
				})
			}
		</List>
	)
}
export default memo(HomePageContent);