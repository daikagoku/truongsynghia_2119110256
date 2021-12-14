import './index.css';
export default function GroupFlashSaleTime(){
    const time ={
        h:[0,0],
        i:[0,0],
        s:[0,0]
    };
	return(
		<div className="d-flex align-items-center">
            <span className="group-flash-sale-time">{time.h[0]}</span>
            <span className="group-flash-sale-time">{time.h[1]}</span>
            <span>:</span>
            <span className="group-flash-sale-time">{time.i[0]}</span>
            <span className="group-flash-sale-time">{time.i[1]}</span>
            <span>:</span>
            <span className="group-flash-sale-time">{time.s[0]}</span>
            <span className="group-flash-sale-time">{time.s[1]}</span>
        </div>
	)
}