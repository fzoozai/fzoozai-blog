import React,{Component} from 'react';

class CountDown extends React.Component{
    constructor(props){
        super(props);
        this.timeInterval = null;  
        let nextTarget = this.figureOutNextTargetDate();
        let headerText = this.figureOutHeaderText(nextTarget.day);
        let targetDate = new Date(nextTarget.year, nextTarget.month, nextTarget.day);
        var date = new Date('October 09, 2018 00:00:00');
        this.targetDate = date;
        this.getTimeTill(this.targetDate, (timeRemaining)=>{
          this.state = {
            timeRemaining
          }
        });
    }
    figureOutNextTargetDate(){
        let current = new Date();
        let year = current.getFullYear();
        let month;
        if(current.getMonth() == 11){
          month = 0; 
          year++;
        } else { 
          month = current.getMonth();
        }
            
        let day = current.getDate();
        if(day == 1){
          day = 2;
        } else if(day >= 2 && day < 20) {
          day = 20;
        } else if(day >= 20){
          day = 1;
          month++;
          if(month == 11){
            month = 0;
            year++;
          }
        }
        return {
          year,
          month,
          day
        }
    }
    figureOutHeaderText(day){
       if(day == 1){
         return "";
       } else if(day >= 2 && day < 20) {
         return "";
       } else if(day >= 20){
         return "";
       }
    }
    getTimeTill(targetTime, callback){
       let current = new Date();
       let currentTime = current.getTime();
       let millis = targetTime - currentTime;
       let f = Math.floor;
       let seconds = f(millis / 1000);
       let minutes = f(seconds / 60);
       let hours = f(minutes / 60);
       let daysRemaining = f(hours / 24);
       let hoursRemaning = (hours % 24);
       let minutesRemaning = (minutes % 60);
       let secondsRemaning = (seconds % 60);
      
        let timeRemaing = {
          "days": daysRemaining, 
          "hours": hoursRemaning,
          "minutes": minutesRemaning,
          "seconds": secondsRemaning
        };
       callback(timeRemaing);
    }
    componentDidMount(){
      this.timeInterval = setInterval(() => {
        this.getTimeTill(this.targetDate,(timeRemaining)=>{
          this.setState({
            timeRemaining
          })
        });
      }, 1000);
    }
    componentWillUnMount(){
      clearInterval(this.timeInterval);
    }
    
    render(){
      
      return(
          <div id="countDown" style={{diplay: 'flex', backgroundColor: 'whitesmoke', opacity: 0.5, padding: '50px'}}>
            <h1>{this.state.headerText}</h1>
            <section style={{display: 'flex', justifyContent: 'space-between', color: 'whitesmoke'}}>
              <div className="days section" style={{color: 'black'}}>
                 <p>Days</p>
                 <h1>{this.state.timeRemaining.days}</h1>
              </div>
              <div className="hours section" style={{color: 'black'}}>
                 <p>Hours</p>
                 <h1>{this.state.timeRemaining.hours}</h1>
              </div>
              <div className="minutes section" style={{color: 'black'}}>
                <p>Minutes</p>
                <h1>{this.state.timeRemaining.minutes}</h1>
              </div>
              <div className="seconds section" style={{color: 'black'}}>
                <p>Seconds</p>
                <h1>{this.state.timeRemaining.seconds}</h1>
              </div>
          </section>
          </div>
      )
    }
  }
  
  
  export default CountDown