import {useState,useEffect,useMemo} from "react";
import { useAsync } from 'react-async';
import {API} from './Config';
function getApiByParams(params){
    return (new URLSearchParams( params ) ).toString();
}
function asyncFetch({apiFetch,option,initData,filter,sort,handle,position}) {
    return async function(setData){
        const newData = {results:initData,error:undefined,isLoading:true};
        setData({...newData});
        console.info("[start]"+position+" fetch",{apiFetch,...option,...newData});
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
                newData.results = results;
                newData.error = undefined;
                newData.isLoading = false;
                console.log("[finally]"+position+" fetch ",{apiFetch,...newData});
            })
            .catch(function(error){
                newData.results = initData;
                newData.error = error;
                newData.isLoading = false;
                console.log("[error]"+position+" fetch ",{apiFetch,...newData});
 
            })   
            .finally(function(){
                setData({...newData});
            })           
    }
}
export default function useFetch({url,keyApi,uriApi,params,method,header,body,initData,filter,sort,handle,position,...props}){    

    const [data,setData] = useState({results:initData,error:undefined,isLoading:false});
    let apiFetch = "";
    apiFetch += useMemo(function(){
        if(keyApi !== undefined && API[keyApi] !== undefined){
            return API[keyApi];
        }else if(url !== undefined){
            return url;
        }else{
            return "";
        };
    },[keyApi,url]);
    apiFetch += useMemo(function(){
        if(uriApi !== undefined){
            return uriApi;
        } else{
            return "";
        }
    },[uriApi])
    apiFetch += useMemo(function(){
        let str = getApiByParams(params);
        if(str != ""){
            return "?"+str;
        }else{
            return str;
        }
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
        if(body!==undefined && ( method == 'POST' || method == 'PUT' )){
            option.body = JSON.stringify(body);
        }
        const usingFetch = asyncFetch({apiFetch,option,initData,filter,sort,handle,position});
        usingFetch(setData);
    },[apiFetch])
    return [{...data}]
}