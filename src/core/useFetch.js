import {useState,useEffect,useMemo} from "react";
import { useAsync } from 'react-async';
import {API} from './Config';
function asyncFetch({apiFetch,option,initData,filter,sort,handle,position}) {
    return async function(setData,setError,setLoading){
        console.log("[start]"+position+" fetch ",{api:apiFetch,data:initData});
        return await fetch(apiFetch,option)
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
                console.log("[finally]"+position+" fetch ",{api:apiFetch,data:results});
            })
            .catch(function(error){
                setData(initData);
                setError(error);
                console.log("[error]"+position+" fetch ",{api:apiFetch,data:initData,error:error});
 
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
function getApiByParams(params){
   let str = ( new URLSearchParams( params ) ).toString();
   if(str != ""){
        return "?"+str;
   };
   return "";
}
export default function useFetch({url,keyApi,uriApi,params,method,header,body,initData,filter,sort,handle,position,...props}){    
    const [data,setData] = useState(initData);
    const [error,setError] = useState("");
    const [isLoading,setLoading] = useState(false);
    let apiFetch = "";
    apiFetch += useMemo(function(){
        return getApi(url,keyApi);
    },[keyApi,url]);
    apiFetch += useMemo(function(){
        if(uriApi !== undefined){
            return uriApi;
        } else{
            return "";
        }
    },[uriApi])
    apiFetch += useMemo(function(){
        return getApiByParams(params);
    },[params]);
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
        setLoading(true);
        setData(initData);
        if(body!==undefined && ( method == 'POST' || method == 'PUT' )){
            option.body = JSON.stringify(body);
        };
        const usingFetch = asyncFetch({apiFetch,option,initData,filter,sort,handle,position});
        usingFetch(setData,setError,setLoading);
        // const timeFetch = setInterval(function(){
        //     usingFetch(setData,setError,setLoading);
        // },5000);
        // return function(){
        //     clearInterval(timeFetch)
        // }
    },[apiFetch])
    return [{data,error,isLoading}]
}

/*

*/