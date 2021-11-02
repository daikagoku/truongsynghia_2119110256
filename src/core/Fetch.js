import {useState,useEffect} from "react";
import API from './Config';
export default function Fetch({api,keyApi,initData,filter,sort,handle,...props}){
    const [data,setData] = useState(initData);
    useEffect(function(){
        let apiFetch = api;
        if(keyApi !== undefined && API[keyApi] !== undefined){
            apiFetch = API[keyApi];
        };
        fetch(apiFetch)
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
                    results.sort(sort);
                };
                if(typeof handle === 'function'){
                    results=handle(results);
                };
                console.log({api,keyApi,results});
                setData(results)
            })
            .catch(function(error){
                console.log({api,keyApi,error});
    }); 
    },[]);
    return data;
}