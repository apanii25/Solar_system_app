import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';

ReactDOM.render(
  <>
    <Card 
    imgsrc ={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname ={Sdata[0].sname}
    links={Sdata[0].links}
    />
    <Card
      imgsrc ={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname ={Sdata[1].sname}
    links={Sdata[1].links}
    />
    <Card
      imgsrc ={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname ={Sdata[2].sname}
    links={Sdata[2].links}
    />
    <Card
      imgsrc ={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname ={Sdata[3].sname}
    links={Sdata[3].links}
    />
  </>,document.getElementById('root')

);
