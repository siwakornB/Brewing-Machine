import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

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


class App extends Component {
  constructor(prop){
    super(prop);
    

    this.state={
      ip:"",
      ptr:0,
      cur:'0',
      next:'0',
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
      
    return(
      <div>
      <div class="col1">
        <Machine 
        updatepress = {(p) => {this.Press(p)}}
        />
      </div>
      <div class="col2">
        <div class="row1">
          <Strbox value={this.state.ip} 
          updatebox={this.handlebox}
          start={this.start}
          next={this.next}
          reset={this.reset}
          prev={this.previous}
          readall={this.readall}
          />
        </div>
        <div class="row2">
          <DFA cur={this.state.cur}/>
        </div>
      </div>
      </div>
    );
  }

  Press(press){
    let s = this.state.ip
    this.setState({ip:s += press});
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
    if(this.state.ip.length !== this.state.ptr){
      this.setState(() => ({
      ptr:this.state.ptr + 1
   }), ()=>{    
    this.save();
    this.startread();
   });
    }else{

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
    
    let str = this.state.ip; //l e m 1 2 i h t c
    let next = str[this.state.ptr]
    switch(this.state.cur){
      case 'l': {this.coffee(next); break;}
      case 'e': {this.coffee(next); break;}
      case 'm': {this.coffee(next); break;}
      case '1': {this.level(next); break;}
      case '2': {this.level(next); break;}
      case 'i': {this.ice(next); break;}
      case 'h': {this.hot(next); break;}
      case 't': {this.tang(next); break;}
      case 'f': {this.final(); break;}
      case 'c': {this.cancel(); break;}
      default: this.init(next);
    }
  }

  start(){
    this.startread();
    //this.setState({cur:'0'});
  }

  reset(){
    this.setState({
      ip:"",
      ptr:0,
      cur:'0',
      next:'0',
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
      case 'l': {this.setState({next:'l'}); break;}
      case 'e': {this.setState({next:'e'}); break;}
      case 'm': {this.setState({next:'m'}); break;}
      case 'i': {this.setState({next:'i'}); break;}
      case 'h': {this.setState({next:'h'}); break;}
      case 't': {this.setState({next:'f'}); break;}
      case 'c': {this.setState({next:'0'}); break;}
      default:
    }
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

    return(
      <div>
        <h2>Put string here</h2>
        <input type="text" value ={this.props.value} onChange={this.update} disabled={this.state.isboxEn}>      
        </input>
        <button type="button" onClick={this.handleRand}>Random<br></br>String</button>
        <br></br>
        <button variant="primary" onClick={this.handleStart} disabled={this.state.isboxEn}>Start</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.props.prev} disabled={!this.state.isboxEn}>Previous</button>
        <button onClick={this.props.next} disabled={!this.state.isboxEn}>Read Next</button>
        <button onClick={this.props.readall} disabled={!this.state.isboxEn}>Read All</button>
        <br></br>
        
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
    switch(this.props.cur){
      
      case 'l':{
        return(
        <div>
            <img src={latt} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 'm':{
        return(
        <div>
            <img src={moc} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 'e':{
        return(
        <div>
            <img src={esp}style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case '1':{
        return(
        <div>
            <img src={lv1} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case '2':{
        return(
        <div>
            <img src={lv2} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 'i':{
        return(
        <div>
            <img src={ice} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 'h':{
        return(
        <div>
            <img src={hot} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 't':{
        return(
        <div>
            <img src={money} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 'f':{
        return(
        <div>
            <img src={fin} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      case 'trap':{
        return(
        <div>
            <img src={trap} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      ); }
      default:{
        return(
        <div>
            <img src={init} style={{width: 1080, height: 600}} alt=":("/>
        </div>
      );}
    }
  }

}

class Machine extends Component{
  render(){
    return(
      <div>
        <img class="machine" src="./img/Machine.png" alt=";("/>
              <button class="latte mc" onClick={() => this.props.updatepress('l')}></button>
              <button class="espres mc" onClick={() => this.props.updatepress('e')}></button>
              <button class="mocca mc" onClick={() => this.props.updatepress('m')}></button>
              <button class="lv1 mc" onClick={() => this.props.updatepress('1')}></button>
              <button class="lv2 mc" onClick={() => this.props.updatepress('2')}></button>
              <button class="ice mc" onClick={() => this.props.updatepress('i')}></button>
              <button class="hot mc" onClick={() => this.props.updatepress('h')}></button>
              <button class="cancel" onClick={() => this.props.updatepress('c')}>Cancel</button>
              <button class="token" onClick={() => this.props.updatepress('t')}>Insert Cash(t)</button>
      </div>      
    );
  }
}

export default App;
