import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PivotTable extends React.Component {


  constructor(props){
    super(props);
    
    const ref = React.createRef();    
    const reportDetails = ref.current.flexmonster.getReport();    

    this.state = { 
      text: '',                   
    }
  }

  handleChangeText = (event) => {
    this.setState({text: event.target.value})
  }

  handleGetReport = (event) => {     
     console.log(this.reportDetails)
  }

  onReportComplete = () => {    
    console.log(">>>>", this.reportDetails);
    console.log(">>>>", this.ref);
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
        ref={this.ref}
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
