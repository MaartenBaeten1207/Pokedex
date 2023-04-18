import React from 'react'
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function RadarChart(props) {
  return (
		<Radar
			data={props.data}
			options={props.options}
		/>
  )
}
export default RadarChart

