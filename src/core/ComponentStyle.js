const StyleCss =[	
		'color',
		'background',
		'backgroundImage',
		'transform',
		'opacity',
		'display',
		'visibility',
		'transition',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'border',
		'borderColor',
		'borderWidht',
		'borderStyle',
		'width',
		'height',
		'lineHeight',
		'position',
		'top',
		'left',
		'right',
		'bottom',
		'zIndex',
		'pointerEvents',
		'transform',
		'whiteSpace'
	];
const TranformCss = [
	'translate','rotate','scale'
]
const BreakPoint= {
	xs:"0",
	sm:"576",
	md:"768",
	lg:"992",
	xl:"1200",
	xxl:"1400"
};
const DataReponsive = ['className','style'];
export default function ComponentStyle({style,...props}){
	const attr = {...props};
	if(style!==undefined){
			attr.style = {...style};
	}else{
			attr.style = {};
	};
	StyleCss.forEach(function(key){
		if(attr[key] !== undefined){
			attr.style[key]=attr[key];
			delete attr[key];
		};
	});
	return attr;
};