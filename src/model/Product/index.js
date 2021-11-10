import useFetch from '../../core/useFetch';
export default function ProductModel(filter,sort,handle,initData){
	const [listItem] = useFetch({
        initData:initData??[],
        keyApi:'product',
        filter:filter,
        sort:sort,
        handle:handle
    });
    return[listItem]
}