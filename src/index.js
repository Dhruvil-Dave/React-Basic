import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

const cssStyle = { };

if(curDate>=1 && curDate<12){
    greeting = "Good Morning";
    cssStyle.color = 'blue';
}
else if(curDate>=12 && curDate<16){
    greeting = "Good Afternoon";
    cssStyle.color = 'orange';
}
else if(curDate>=16 && curDate<21){
    greeting = "Good evening";
    cssStyle.color = 'violet';
}
else{
    greeting = "Good Night";
    cssStyle.color = 'grey';
}


ReactDOM.render(
	<React.Fragment>
    <div>
	<h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
	</div>
	</React.Fragment>
	,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
