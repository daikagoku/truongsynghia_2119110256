import {memo} from 'react';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import {Button} from '../../../../../../components/';
import GroupSlide from './screens/Slide/';
import GroupLoading from './screens/Loading/';
import GroupTitle from './screens/Title';
import GroupTime from './screens/Time';
function GroupFlashSale(props) {
    const [fetchData] = useFetch({
        initData:[],
        keyApi:'product',
        uriApi:'/sale_price',
        position:'home-sale'
    });
    return (
        <div className="container-fluid group-flash-sale-section px-0">
             <div className="container-lg">
                 <div className="row">
                     <div className="col col-12 group-flash-sale-content">
                         <div className="row group-flash-sale-head">
                             <div className="col col-12 col-md-4 align-items-center justify-content-center">
                                 <GroupTitle />
                             </div>
                             <div className="col col-8 col-md-5 align-items-center justify-content-center">
                                 <GroupTime /> 
                             </div>
                             <div className="col col-4 col-md-3 align-items-center justify-content-center">
                                 <Button className="group-flash-sale-button-view"to="/flashsale">Xem thêm</Button>
                             </div>
                         </div>
                         <div className="row group-flash-sale-body">
                            {
                                fetchData.isLoading && <GroupLoading />
                                || <GroupSlide data={fetchData} />
                            }
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};    
export default memo(GroupFlashSale);

/*

*/
// {
                            //     
                            //     
                            // }  