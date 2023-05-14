import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜W
    let day = today.getDay()
    
    const Api_key = process.env.REACT_APP_API_KEY;

    const fetchData = async() => {
        const link = 'https://open.neis.go.kr/hub/mealServiceDietInfo?MLSV_YMD=' + year.toString() + month.toString().padStart(2, "0") + (date + 1).toString().padStart(2, "0") +'&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240082'
        const res = await fetch(link).then(res => res.json()); 
        console.log(res.mealServiceDietInfo[1].row);
        setData(res.mealServiceDietInfo[1].row);
    }	

    const fetchData2 = async() => {
        const link = 'https://open.neis.go.kr/hub/hisTimetable?ALL_TI_YMD=' + year.toString() + month.toString().padStart(2, "0") + (date + 1).toString().padStart(2, "0") +'&ATPT_OFCDC_SC_CODE=D10&Type=json&SD_SCHUL_CODE=7240082&GRADE=2&CLRM_NM=7&KEY=' + Api_key
        const res = await fetch(link).then(res => res.json()); 
        console.log(res.hisTimetable[1].row);
        setData2(res.hisTimetable[1].row)
    }	

    useEffect(() => {
        fetchData();
        fetchData2();
    }, []);

    return (
        
        
        <div className='MainPage'>

            <div className='Box'>
                <span className='Box_title'> 시간표 </span> <br />
                {year.toString() + "년 " + month.toString().padStart(2, "0") + "월 " + (date + 1).toString().padStart(2, "0") + "일"} <br /> <br /> 

                1교시 : {data2.length > 0 ? data2[0].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
                2교시 : {data2.length > 0 ? data2[1].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
                3교시 : {data2.length > 0 ? data2[2].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
                4교시 : {data2.length > 0 ? data2[3].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
                5교시 : {data2.length > 0 ? data2[4].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
                6교시 : {data2.length > 0 ? data2[5].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
                7교시 : {data2.length > 0 ? data2[6].ITRT_CNTNT : '데이터가 존재하지 않습니다. \n 시간표 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다. \n'} <br />
            </div>
            <div className='Box'>
                <span className='Box_title'> 급식 </span> <br />
                {year.toString() + "년 " + month.toString().padStart(2, "0") + "월 " + (date + 1).toString().padStart(2, "0") + "일"} <br /> <br /> 

                <span className='Box_subtitle'> 조식 </span>
                {data.length > 0 ? data[0].DDISH_NM.replaceAll('<br/>', '\n') : '데이터가 존재하지 않습니다. \n 급식 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다.'} <br /> <br />

                <span className='Box_subtitle'> 중식 </span> 
                {data.length > 0 ? data[1].DDISH_NM.replaceAll('<br/>', '\n')  : '데이터가 존재하지 않습니다. \n 급식 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다.'} <br /> <br />
                
                <span className='Box_subtitle'> 석식 </span> 
                {data.length > 0 ? data[2].DDISH_NM.replaceAll('<br/>', '\n')  : '데이터가 존재하지 않습니다. \n 급식 확인 서비스는 휴일에는 서비스 되지않습니다. \n 휴일이 아닌 경우에 작동하지 않는 경우는 직접 연락 부탁드립니다.'} <br /> 

            </div>
            <div className='Box'>
                <span className='Box_title'> 공지사항 </span> <br /> <br />
                개발 중에 있습니다.
            </div>
        </div>
    );
  }


export default App;
