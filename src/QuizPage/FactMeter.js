import React from 'react';
import GaugeChart from 'react-gauge-chart'

class FactMeter extends React.Component{
	state ={
		factScore : 0,
		maxFactScore :50,
		minFactScore: -50,
		factScoreChanged : false
	}

	formatValue = (value) => {
		if (!this.state.factScoreChanged){
			return "단서를 찾아 보세요."
		}
		if (value > 75){
			return "사실"
		} else if (value > 50){
			return "대체로 사실"
		} else if (value > 25){
			return "대체로 사실 아님"
		} else{
			return "전혀 사실 아님"
		}
	}

	updateValue = (offset) => {
		this.setState({factScore: this.state.factScore + offset})
	}

	render(){
		return(<div id="factmeter">
			<GaugeChart id="gauge" formatTextValue={value=>{return this.formatValue(value)}} percent={this.state.factScore + 50 / 100} hideText={true}/>
			<div>{this.formatValue(this.state.factScore+50)}</div>
		</div>)
	}
}

export default FactMeter