import {memo,useContext} from 'react';
import clsx from 'clsx';
import './index.css';
import {Button,Icon} from '../../../../../../../components/';
import useFetch from '../../../../../../../core/useFetch';
import useMessageModel from '../../../../../../../model/Message';
import {InfoContext} from "../init";
function UserInfoOption({...props}){
	const [data,setData] = useContext(InfoContext);
	const [messages,handleMessage] =useMessageModel();
	const [dataFetch,handleFetch] = useFetch({
		initData:false,
		keyApi:'user',
        position:"user-info-submit"
	})
	function handleSubmit(){
		handleFetch.put({
			params:data,
			handle:function(data,res){
				if(res === 200 && data){
					handleMessage.show({
						text:"Cập nhật thành công"
					})
				}else{
					handleMessage.show({
						text:"Cập nhật không thành công"
					})
				}
				return data;
			}
		})
	}
	return(
		<Button onClick={handleSubmit} className={clsx("user-info-submit","square-btn")}>
			Lưu
		</Button>
	)
}
export default memo(UserInfoOption);