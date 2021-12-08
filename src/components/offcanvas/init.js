export const initData={
    show:false
};
export function reducer(prevState,action){
    switch(action.key){
      case 'set_show':
          return{
            ...prevState,
            show:action.value
          };
      default :
        console.log(action.key,{prevState,action,error:"Không tồn tại action"});
        return{
          ...prevState
        }
        break;
    }
};