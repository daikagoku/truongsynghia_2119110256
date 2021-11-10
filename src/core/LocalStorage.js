
const LocalStorage = (function(){
    const KEY  = 'GoShop';
    const STORAGE = JSON.parse(localStorage.getItem(KEY)) ?? {};
    function save(){
        localStorage.setItem(KEY,JSON.stringify(STORAGE));
    };
    return function(nameSpace,initData){
        return{
            get:function(){
                return STORAGE[nameSpace] ?? initData;
            },set:function(value){
                STORAGE[nameSpace]=value;
                save();
            },reset:function(value){
                STORAGE[nameSpace]=initData;
                save();
            },remove:function(){
                delete STORAGE[nameSpace];
                save();
            }
        }
   }
})();
export default LocalStorage;