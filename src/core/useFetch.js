import {useState,useEffect} from "react";
import {API} from './Config';
export default function Fetch({url,keyApi,method,header,initData,filter,sort,handle,...props}){
    const [data,setData] = useState(initData);
    let apiFetch;
    if(keyApi !== undefined && API[keyApi] !== undefined){
        apiFetch = API[keyApi];
    }else if(url !== undefined){
        apiFetch = url;
    };
    useEffect(function(){
        apiFetch !== undefined && 
        fetch(apiFetch,{ 
            method: method ?? 'GET',
            'Content-Type': 'application/json'

        })
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
                console.log("fetch:",keyApi,{url,results});
                setData(results)
            })
            .catch(function(error){
                console.log("fetch:",keyApi,{url,error});
        }); 
    },[url,keyApi]);
    return [data];
}