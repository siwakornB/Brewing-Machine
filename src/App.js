import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ScrollText from 'react-scroll-text'

//const reactStringReplace = require('react-string-replace')

const init = require('./pic/1.jpg');
const moc = require('./pic/2.jpg');
const esp = require('./pic/3.jpg');
const latt = require('./pic/4.jpg');
const lv1 = require('./pic/5.jpg');
const lv2 = require('./pic/6.jpg');
const ice = require('./pic/7.jpg');
const hot = require('./pic/8.jpg');
const money = require('./pic/9.jpg');
const fin = require('./pic/10.jpg');
const trap = require('./pic/11.jpg');

//const bgsong = new Audio("./love-me.mp3");
const acpt = new Audio('extra-life.mp3');
const rej = new Audio('ha-sound-effect.mp3');


class App extends Component {
  constructor(prop){
    super(prop);
    

    this.state={
      en:false,
      ip:"",
      ptr:0,
      cur:'0',
      next:'0',
      result:'',
      history: [{ node: ['0','0']}]
    }

    this.handlebox = this.handlebox.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.readall = this.readall.bind(this);

    
  }

  render(){
    /*bgsong.addEventListener('ended', function () {
      bgsong.currentTime = 0;
      bgsong.play();
    }, false);*/
    return(
      <div>
        <audio id="ad0" src="./love-me.mp3" preload="auto" controls autoPlay loop/>
        <div class="groupname">
          <div style={{textAlign:"center", fontSize: "30px"}}>สมาชิก<br></br></div>
        60010659 นายพรเทพ หล่มแสง<br></br>
        60010912 วโรดม ใบอุดม<br></br>
        60010916 วัชรเกียรติ ว่องเจริญพร<br></br>
        60010986 ศิวกรณ์ บุญพามี<br></br>

      </div>
      <div class="col1">
        <Machine 
        updatepress = {(p) => {this.Press(p)}}
        />
      </div>
      <div class="col2">
        <div class="row1">
          <Strbox value={this.state.ip}
          ptr={this.state.ptr}
          updatebox={this.handlebox}
          start={this.start}
          next={this.next}
          reset={this.reset}
          prev={this.previous}
          readall={this.readall}
          setEn={() => this.setEn()}
          />
        </div>
        <div class="row2">
          <DFA cur={this.state.cur} result={this.state.result}/>
        </div>
      </div>
      </div>
    );
  }

  Press(press){
    if(this.state.en === false && this.state.ip.length <= 20){
      let s = this.state.ip;
      this.setState({ip:s += press});
    }
  }

  handlebox(v){
    this.setState({ip:v});
  }

  readall(){
    if(this.state.ip.length !== this.state.ptr){
      setTimeout(() =>{//Start the timer
      this.next(); 
      this.readall();
    } 
      , 1000);//After 1 second
    }
  }
  
  save(){
    const node = [this.state.cur,this.state.next]
    this.setState({history:this.state.history.concat({node:node})});
  }

  next(){
    if(this.state.ip.length > this.state.ptr){
      this.setState(() => ({
      ptr:this.state.ptr + 1
      }), ()=>{
        this.save();
        this.startread();
      });
    }
  }

  previous(){
    if (this.state.ptr > 0){
      this.setState(() => ({
        ptr:this.state.ptr - 1
     }), ()=>{    
      const history = this.state.history;
      const temp = history[history.length - 1];
      let node = temp.node.slice();
      history.pop();
      this.setState({cur:node[0],next:node[1],history:history})
      if(this.state.ip.length === this.state.ptr){
        if(this.state.cur === 'f'){
          this.setState({result:"Accept"});
        }else{
          this.setState({result:"Reject"});
        }
      }else{
        this.setState({result:""});
      }
     });
      
    }
  }

  startread(){
    /*this.setState(() => ({
      cur:this.state.next
   }), ()=>{
    this.startread2(); 
   });*/
   this.setState({cur:this.state.next},this.startread2)
  }
  
  startread2(){
    if(this.state.ip.length === this.state.ptr){
      if(this.state.cur === 'f'){
        this.setState({result:"Accept"});
        acpt.play();
      }else{
        this.setState({result:"Reject"});
        rej.play();
      }
    }else{
      this.setState({result:""});
    }
    let str = this.state.ip; //l e m 1 2 i h t c string
    //console.log((this.state.ip).substring(0,this.state.ptr),(this.state.ip.substring(this.state.ptr+1))); //(this.state.ip).split((this.state.ip)[this.state.ptr]),
    let next = str[this.state.ptr] //index
    switch(this.state.cur){  //current state
      case 'l': {this.coffee(next); break;}
      case 'e': {this.coffee(next); break;}
      case 'm': {this.coffee(next); break;}
      case '1': {this.level(next); break;}
      case '2': {this.level(next); break;}
      case 'i': {this.ice(next); break;}
      case 'h': {this.hot(next); break;}
      case 't': {this.tang(next); break;}
      case 'f': {this.final(); break;}
      case 'trap': {this.trap(); break;}
      default: this.init(next);
    }
  }

  start(){
    this.startread();
    this.setState({en:true});
  }

  reset(){
    this.setState({
      en:false,
      ip:"",
      ptr:0,
      cur:'0',
      next:'0',
      result:'',
      history: [{ node: ['0','0',0]}]
    });
  }

  init(n){
    switch(n){
      case 'l': {this.setState({next:'l'}); break;}
      case 'e': {this.setState({next:'e'}); break;}
      case 'm': {this.setState({next:'m'}); break;}
      default: 
    }
  }

  coffee(n){
    switch(n){
      case 'l': {this.setState({next:'l'}); break;}
      case 'e': {this.setState({next:'e'}); break;}
      case 'm': {this.setState({next:'m'}); break;}
      case '1': {this.setState({next:'1'}); break;}
      case '2': {this.setState({next:'2'}); break;}
      case 'c': {this.setState({next:'0'}); break;}
      default:
    }
  }

  level(n){
    switch(n){
      case 'l': {this.setState({next:'l'}); break;}
      case 'e': {this.setState({next:'e'}); break;}
      case 'm': {this.setState({next:'m'}); break;}
      case '1': {this.setState({next:'1'}); break;}
      case '2': {this.setState({next:'2'}); break;}
      case 'i': {this.setState({next:'i'}); break;}
      case 'h': {this.setState({next:'h'}); break;}
      case 'c': {this.setState({next:'0'}); break;}
      default:
    }
  }

  ice(n){
    switch(n){
      case 'l': {this.setState({next:'l'}); break;}
      case 'e': {this.setState({next:'e'}); break;}
      case 'm': {this.setState({next:'m'}); break;}
      case '1': {this.setState({next:'1'}); break;}
      case '2': {this.setState({next:'2'}); break;}
      case 'i': {this.setState({next:'i'}); break;}
      case 'h': {this.setState({next:'h'}); break;}
      case 't': {this.setState({next:'t'}); break;}
      case 'c': {this.setState({next:'0'}); break;}
      default:
    }
  }

  hot(n){
    switch(n){
      case 'l': {this.setState({next:'l'}); break;}
      case 'e': {this.setState({next:'e'}); break;}
      case 'm': {this.setState({next:'m'}); break;}
      case '1': {this.setState({next:'1'}); break;}
      case '2': {this.setState({next:'2'}); break;}
      case 'i': {this.setState({next:'i'}); break;}
      case 'h': {this.setState({next:'h'}); break;}
      case 't': {this.setState({next:'f'}); break;}
      case 'c': {this.setState({next:'0'}); break;}
      default:
    }
  }

  tang(n){
    switch(n){
      case 't': {this.setState({next:'f'}); break;}
      case 'c': {this.setState({next:'0'}); break;}
      default:
    }
  }

  trap(){
    
  }

  final(){
    this.setState({next:'trap'});
  }

  cancel(){
    this.setState({next:'0'});
  }

}

class Strbox extends Component{
  constructor(prop){
    super(prop);
    
    this.state={
      isboxEn:false
    }
    
    this.handleRand = this.handleRand.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.update = this.update.bind(this);
  }
  
  render(){

    /*const moves = this.props.his.map((step, move) => {
      return (
        <li>
          {move}
        </li>
      );
    });*/
    /*<h1>{this.props.value}</h1>
        <h1>ptr ={this.props.ptr}</h1>
        <h1>nextstring ={this.props.value[this.props.ptr]}</h1>
        <h1>currentnode ={this.props.cur}</h1>
        <h1>nextnode ={this.props.nextn}</h1>
        <h1>{ console.log(this.props.his) }</h1>*/

        /*
        (this.state.ip).substring(0,this.state.ptr)
        */
      
      /*reactStringReplace(s, /(\d+)/g, (match, i) => (
        <span key={i} style={{ color: 'red' }}>{match}</span>
      ));*/
      //console.log(this.props.value[this.props.ptr]);
    return(
      <div>
      
      <div class="boxtop">
        <div class="title"><ScrollText>เครื่องชงกาแฟอัติโนมัติ (Brewing Coffee Machine)</ScrollText></div>
        <hr></hr>
        <div class="string" >
          <div style={{display: 'inline'}}>String: {this.props.value.substring(0,this.props.ptr)}</div>
          <div style={{color: 'red',display: 'inline'}}><b>{this.props.value[this.props.ptr]}</b></div>
          <div style={{display: 'inline'}}>{this.props.value.substring(this.props.ptr+1)}</div>
        </div>
        
        
        <div class="boxstring"></div>
        <br></br>
        <button class="random" type="button" onClick={this.handleRand}>Random String</button>
        <button class="start" variant="primary" onClick={this.handleStart} disabled={this.state.isboxEn}>Start</button>
        <button class="reset" onClick={this.handleReset}>Reset</button>
        <button class="previous" onClick={this.props.prev} disabled={!this.state.isboxEn}>Previous</button>
        <button class="next" onClick={this.props.next} disabled={!this.state.isboxEn}>Next</button>
        <button class="all" onClick={this.props.readall} disabled={!this.state.isboxEn}>Read All</button>
        <br></br>
        
      </div>
      </div>
    );
  }
  update(event){
    this.props.updatebox(event.target.value);
  }

  handleStart(event){
    this.setState({isboxEn:true});
    this.props.start();
  }

  handleReset(event){
    this.setState({isboxEn:false});
    this.props.reset();
  } 

  handleRand(event){    
    if(!this.state.isboxEn){
      var allcha = 'lem12ihtc';
      var len = 12;
      var result = '';
      for(let i=0;i<len;i++){
        result += allcha.charAt(Math.floor(Math.random()*100)%9)
      }
      this.props.updatebox(result)
    }
  }
}

class DFA extends Component{

  render(){
    return (this.set());
  }


  set(){
    var result;
    if(this.props.result === "Accept"){
      result = <h1 class="dfatx" style={{color:'green'}}>{this.props.result}</h1>
    }else{
      result = <h1 class="dfatx" style={{color:'red'}}>{this.props.result}</h1>
    }
    switch(this.props.cur){
      
      case 'l':{
        return(
        <div>
            <img src={latt}  alt=":("/>
            {result}
        </div>
      ); }
      case 'm':{
        return(
        <div>
            <img src={moc}  alt=":("/>
            {result}
        </div>
      ); }
      case 'e':{
        return(
        <div>
            <img src={esp} alt=":("/>
            {result}
        </div>
      ); }
      case '1':{
        return(
        <div>
            <img src={lv1}  alt=":("/>
            {result}
        </div>
      ); }
      case '2':{
        return(
        <div>
            <img src={lv2}  alt=":("/>
            {result}
        </div>
      ); }
      case 'i':{
        return(
        <div>
            <img src={ice}  alt=":("/>
            {result}
        </div>
      ); }
      case 'h':{
        return(
        <div>
            <img src={hot}  alt=":("/>
            {result}
        </div>
      ); }
      case 't':{
        return(
        <div>
            <img src={money}  alt=":("/>
            {result}
        </div>
      ); }
      case 'f':{
        return(
        <div>
            <img src={fin}  alt=":("/>
            {result}
        </div>
      ); }
      case 'trap':{
        return(
        <div>
            <img src={trap}  alt=":("/>
            {result}
        </div>
      ); }
      default:{
        return(
        <div>
            <img src={init} alt=":("/>
            {result}
        </div>
      );}
    }
  }

}

class Machine extends Component{
  render(){
    return(
      <div>
        <img class="machine" src="./img/Machine1.png" alt=";("/>
        <img class="bank" src = "./img/insert.png" alt=";("/>
        <div class="howto">
          <b style={{color: "red"}}>วิธีใช้</b> <br></br>
            1. เลือกกาแฟ <br></br>
            2. เลือกระดับความหวาน
              <li>LV1 คือ หวานน้อย</li>
              <li>LV2 คือ หวานปกติ</li>
            3. เลือกร้อน เย็น
                 <li>ร้อน ราคา 20 บาท</li>
                 <li>เย็น ราคา 40 บาท</li>
            4. จ่ายเงิน <br></br>
            <li>หยอดครั้งละ 20 บาท</li>
        </div>
              <button class="latte mc" onClick={() => this.props.updatepress('l')}></button>
              <button class="espres mc" onClick={() => this.props.updatepress('e')}></button>
              <button class="mocca mc" onClick={() => this.props.updatepress('m')}></button>
              <button class="lv1 mc" onClick={() => this.props.updatepress('1')}></button>
              <button class="lv2 mc" onClick={() => this.props.updatepress('2')}></button>
              <button class="ice mc" onClick={() => this.props.updatepress('i')}></button>
              <button class="hot mc" onClick={() => this.props.updatepress('h')}></button>
              <button class="cancel" onClick={() => this.props.updatepress('c')}>Cancel(c)</button>
              <button class="token" onClick={() => this.props.updatepress('t')}>Insert Cash(t)</button>
      </div>    
    );
  }
}

export default App;
