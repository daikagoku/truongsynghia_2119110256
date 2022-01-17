import {useState,useEffect,useMemo} from "react";
import { useAsync } from 'react-async';
import {API,getApiByParams} from './Config';

function asyncFetch({apiFetch,apiSearch,option,initData,filter,sort,handle,position}) {
    return async function(setData,setError,setLoading){
        console.log("[start]"+position+" fetch ",
            {api:apiFetch,
                search:apiSearch,
                data:initData});
        
        return await fetch(apiFetch+apiSearch,option)
            .then(function(res){
                if(res.ok){
                    return res.json();
                }else{
                    return Promise.reject(res);
                }
            })
            .then(function(results){
                if(handle !== undefined && typeof handle === 'function'){
                    results = handle(results);
                };
                if(results === undefined){
                    results = initData;
                }
                setData(results);
                setError("");
                console.log("[finally]"+position+" fetch ",
                    {api:apiFetch
                        ,search:apiSearch
                        ,data:results});
            })
            .catch(function(error){
                setData(initData);
                setError(error);
                console.log("[error]"+position+" fetch ",
                    {api:apiFetch,
                        search:apiSearch,
                        data:initData,
                        error:error});
 
            })   
            .finally(function(){
                setLoading(false);
            })           
    }
};
function getApi(url,keyApi){
    if(keyApi !== undefined && API[keyApi] !== undefined){
            return API[keyApi];
        }else if(url !== undefined){
            return url;
        }else{
            return "";
    };
}

export default function useFetch({url,keyApi,uriApi,params,search,method,header,initData,filter,sort,handle,position,...props}){    
    const [data,setData] = useState(initData);
    const [error,setError] = useState("");
    const [isLoading,setLoading] = useState(false);
    const [apiFetch,setApi] = useState("");
    const [apiSearch,setSearch] = useState("");
    useEffect(function(){
        let newApiFetch = getApi(url,keyApi);
        if(uriApi !== undefined){
           newApiFetch += uriApi;
        };
        setApi(newApiFetch);
    },[url,keyApi,uriApi])
   useEffect(function(){
        setSearch(getApiByParams(params,search));
    },[params,search])
    const option = useMemo(function(){
        return {
            method: method ?? 'GET',
            credentials: 'omit',
            headers:{
                'Content-Type': 'application/json'
            }
        }
    },[]);
    useEffect(function(){
        if(apiFetch!=""){
            setLoading(true);
            setData(initData);
            const usingFetch = asyncFetch({apiFetch,apiSearch,option,initData,filter,sort,handle,position});
            usingFetch(setData,setError,setLoading);
            // const timeFetch = setInterval(function(){
            //     usingFetch(setData,setError,setLoading);
            // },100);
            // return function(){
            //     clearInterval(timeFetch)
            // }
        }
    },[apiFetch,apiSearch])
    return [{data,error,isLoading}]
}

/*

*/