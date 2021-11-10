import {useState,useEffect} from "react";
import API from './Config';
export default function Fetch({api,keyApi,initData,filter,sort,handle,...props}){
    const [data,setData] = useState(initData);
    let apiFetch;
    if(keyApi !== undefined && API[keyApi] !== undefined){
        apiFetch = API[keyApi];
    }else if(api !== undefined){
        apiFetch = api;
    };
    useEffect(function(){
        apiFetch !== undefined && fetch(apiFetch)
            .then(function( response){
              return response.json();
            })
            .then(function(results){
                if(filter !== undefined && typeof filter === 'function'){
                    results = results.filter(function(item,index){
                        return filter(item,index);
                    })
                };
                if(sort !== undefined && typeof sort === 'function'){
                    results = results.sort(sort);
                };
                if(typeof handle === 'function'){
                    results = handle(results);
                };
                if(results === undefined){
                    results = initData;
                };
                console.log("fetch:",{api,keyApi,results});
                setData(results)
            })
            .catch(function(error){
                console.log("fetch:",{api,keyApi,error});
        }); 
    },[apiFetch]);
    return [data];
}