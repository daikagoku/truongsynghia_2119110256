export default function ConvertToAlias(str){
	let newStr = str
		.toLowerCase()
		.replace(/\s{1,}/g,"-")
		.replace(/[àáảãạâấầẩẫậăắằẳẵặ]/g,"a")
		.replace(/[èéẻẽẹêếềểễệ]/g,"e")
		.replace(/[íìỉĩị]/g,"i")
		.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g,"o")
		.replace(/[úùủũụưứừửữự]/g,"u")
		.replace(/[ýỳỷỹỵ]/g,"y")
		.replace(/[đ]/g,"d")
	return newStr;
}
import {useState,createContext} from 'react';
export const StoreContext = createContext({});
const useStorage = (function(){
    const KEY  = 'GoShop';
    const STORAGE = JSON.parse(localStorage.getItem(KEY)) ?? {};
    return function(nameSpace,initData){
        const [data,setData] = useState(STORAGE[nameSpace] ?? initData);
        function save(){
            localStorage.setItem(KEY,JSON.stringify(STORAGE));
            setData(STORAGE[nameSpace] ?? initData);
        };
        function reducer(action){
            console.log("store",action.key,action)
            switch(action.key){
                case 'set_value':
                    STORAGE[nameSpace] = action.value;
                    save();
                    break;
                case 'reset_value':
                    STORAGE[nameSpace] = initData;
                    save();
                    break;
                case 'remove_value':
                    delete STORAGE[nameSpace];
                    save();
                    break;
                default:
                    break;
            }
        };
        return [data,reducer];
   }
})();
export default useStorage;