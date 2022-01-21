import {useState,useEffect,useMemo} from "react";
import queryString from 'query-string';
import axios from 'axios';
import {API} from './Config';
function getApi(url,keyApi){
    if(keyApi !== undefined && API[keyApi] !== undefined){
            return API[keyApi];
        }else if(url !== undefined){
            return url;
        }else{
            return "";
    };
}
function asyncGet(apiFetch,option,initData,position,setData,setError,setLoading) {
    return async function Get({search,filter,sort,handle}){
        console.log("[start GET]"+position+" fetch ",
             {api:apiFetch,
                method:"GET",
                search:search,
                data:initData,
                option:option});
        return await fetch(apiFetch+"?"+search,{
            option,method:"GET"
        })
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
                console.log("[finally GET]"+position+" fetch ",
                    {api:apiFetch,
                        method:"GET",
                        search:search,
                        data:results,
                        option:option});
            })
            .catch(function(error){
                setData(initData);
                setError(error);
                console.log("[error GET]"+position+" fetch ",
                    {api:apiFetch,
                        method:"GET",
                        search:search,
                        data:initData,
                        option:option});
 
            })   
            .finally(function(){             
                setTimeout(function(){
                    setLoading(false);    
                },300)
            })           
    }
};

function asyncPost(apiFetch,option,initData,position,setData,setError,setLoading) {
    return async function Post({body}){
        console.log("[start POST]"+position+" fetch ",
             {api:apiFetch,
                method:"POST",
                body:body,
                data:initData,
                option:option});
        return await fetch(apiFetch,{
            option,body,method:"POST"
        })
            .then(function(res){
                console.log(res)
                if(res.ok){
                    return res.json();
                }else{
                    return Promise.reject(res);
                }
            })
            .then(function(results){
                setData(results);
                setError("");
                console.log("[finally POST]"+position+" fetch ",
                    {api:apiFetch,
                        method:"POST",
                        body:body,
                        data:results,
                        option:option});
            })
            .catch(function(error){
                setData(initData);
                setError(error);
                console.log("[error POST]"+position+" fetch ",
                    {api:apiFetch,
                        method:"POST",
                        body:body,
                        error:error,
                        data:initData,
                        option:option});
 
            })   
            .finally(function(){             
                setTimeout(function(){
                    setLoading(false);    
                },300)
            })           
    }
};
export default function useFetch({url,keyApi,uriApi,params,search,method,header,initData,filter,sort,handle,position,...props},isFetch){    
    const [data,setData] = useState(initData);
    const [error,setError] = useState("");
    const [isLoading,setLoading] = useState(false);
    const option = useMemo(function(){
        return {
            credentials: 'omit',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };
    },[])
    const apiFetch = useMemo(function(){
        let newApiFetch = getApi(url,keyApi);
        if(uriApi !== undefined){
           newApiFetch += uriApi;
        };
        return newApiFetch;
    },[url,keyApi,uriApi]);
    const handleFetch = useMemo(function(){
       const handleGet = asyncGet(apiFetch,option,initData,position,setData,setError,setLoading)
       const handlePost = asyncPost(apiFetch,option,initData,position,setData,setError,setLoading)
       return {
            get:function({params,handle}){
                const search = queryString.stringify(params);
                handleGet({search,handle});
            },post:function({params}){
                const body = JSON.stringify(params);
                handlePost({body});
            }
       }
    },[apiFetch]);
    return [{data,error,isLoading},handleFetch]
}

/*

*/