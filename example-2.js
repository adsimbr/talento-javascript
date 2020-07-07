import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PivotTable extends React.Component {


  constructor(props){
    super(props);
    
    this.refFlexmonster = React.createRef(); 
    
    this.state = { 
      text: '',                   
    }
  }

  handleChangeText = (event) => {
    this.setState({text: event.target.value})
  }

  handleGetReport = (event) => {     
     console.log(this.refFlexmonster)
  }

  onReportComplete = () => {    
    console.log(">>>>", this.refFlexmonster);    
  }

  render(){

    return (<div className="App">

      <TextField               
          label="Text To Example"
          fullWidth                    
          value={this.state.text}
          onChange={this.handleChangeText}
          InputLabelProps={{
            shrink: true,
          }}         
        />

       <FlexmonsterReact.Pivot
        key={"00010"}
        componentFolder="https://cdn.flexmonster.com/"
        ref={this.refFlexmonster}
        toolbar={true}
        width="100%"
        report="https://cdn.flexmonster.com/reports/report.json"
        reportcomplete={this.onReportComplete}
       />

      <Button 
        variant="contained" 
        color="primary"   
        onClick={this.handleGetReport}                                              
      >
        Execute get data

      </Button>       

     </div>)
  }  

}

export default PivotTable;
