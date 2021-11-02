/*------------------------------*/
/*	USE
		isRequired 	= true/false
		isFilter 	= funtion(value){ ... return 'mesage'||undefined}
		isType  	= type   		#{number,email,phone}
		minLength 	= length
		maxLength 	= length

		valueType (update)

*/
/*------------------------------*/
import {forwardRef} from 'react';
const Input = (function(){
	const Validation = {
		isRequired:function(required){
			if(required !== undefined && required === true){
				return function(value){
					if(value === ""){
						return "Trường này không bỏ trống!";
					};
				}
			}
		},
		isFilter:function(filter){
			if(filter !== undefined && typeof(filter)==='function'){
				return function(value){
					return filter(value);
				};
			}
		},
		isType:function(type){
			const _listType={
				number:{
					regex:/^[0-9]+$/,
					message:"gồm các số 0-9"
				},
				email:{
					regex:/^[a-zA-Z]+[a-zA-Z0-9]*(([-._])?[a-zA-Z0-9]+)*@[a-z]+(.[a-z]+){1,2}$/,
					message:"được định dạng name@example.com"
				},
				phone:{
					regex:/^0[0-9]{9,10}$/,
					message:"được định dạng 000000000"
				}

			};
			if(_listType[type]!==undefined){
				const _type = _listType[type];
				const _checktype = this.isRegex(_type.regex);
				return function(value){
					if(_checktype(value) === false){
						return "Trường này "+_type.message;
					};
				};
			}

		},
		minLength:function(length){
			const _length = Number(length)
			if(typeof(_length)==='number' && !Number.isNaN(_length)){
				return function(value){
					if(value.length < _length){
						return "Trường này phải lớn hơn "+_length+" kí tự!";
					}
				};
			};
		},
		maxLength:function(length){
			const _length = Number(length)
			if(typeof(_length)==='number' && !Number.isNaN(_length)){
				return function(value){
					if(value.length > _length){
						return "Trường này phải nhỏ hơn "+_length+" kí tự!";
					}
				};
			};
		},
		isRegex:function(regex){
			if(regex !== undefined){
				const _regex= regex;
				return function(value){
					if(value!=="" && _regex !== undefined && !_regex.test(value)){
						return false;
					}else{
						return true;
					}
				};	
			};
		}
	};
	return function({type,onBlur,placeholder,setValid,...props},ref){
		const _Valid = {
			ruler:[]
		};
		const _Attr = {
			...props,
			'data-type':'input',
			type:"text",
			placeholder:" "
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		if(type!==undefined){
			_Attr.type=type;
		}
		if(placeholder !== undefined){
			_Attr.placeholder = placeholder;
		};
		for(let key in Validation){
			if(_Attr !== undefined && _Attr[key] !== undefined){
				_Valid.ruler.push(Validation[key](_Attr[key]));
			};
		};
		if(setValid !== undefined){
			setValid(_Valid.ruler);
		};
		function _handleCheckValid(value){
			_Valid.error=[];
			_Valid.ruler.forEach(function(__ruler,__index){
				const __error = __ruler(value);
				if(__error !== undefined){
					_Valid.error.push(__error);
				}else{
					
				}
			});
			if(_Valid.error.length > 0){
				return false;
			}else{
				return true;
			}
		};
		_Attr.onBlur = function(event){
			if(onBlur !== undefined && typeof(onBlur)==='function'){
				onBlur(event);
			};
			if(_handleCheckValid(event.target.value) === true){
				event.target.dataset.valid="true";
			}else{
				event.target.dataset.valid="false";
			};
		};
		return(
			<input
				{..._Attr}
			/>
		)
	};	
})();
export default forwardRef(Input);



