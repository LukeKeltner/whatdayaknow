import React, { Component } from 'react';
import '../assets/styles/report.css'
import QuestionIcon from './QuestionIcon';
import API from "../utils/API";



class Report extends Component 
{
	state =
	{
		quesitons: [],
		percent: 0
	}

	componentWillMount = () =>
	{
		const array = []

		for (let i=0; i<this.props.amount; i++)
		{
			const element = 
			{
				correct: false,
				wrong: false,
				challenge: false
			}

			if (this.props.corrects[i] === 1)
			{
				element.correct = true
			}

			else if (this.props.wrongs[i] === 1)
			{
				element.wrong = true
			}

			else if (this.props.challenges[i] === 1)
			{
				element.challenge = true
			}

			array.push(element)
		}

		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		const rights = this.props.corrects.reduce(reducer)
		const percent = (rights/this.props.amount*100).toFixed(0)

		this.setState({questions: array, percent: percent})
	}

	reset = event =>
	{
		const userid = event.target.getAttribute("userid")
		const topic = event.target.getAttribute("topic")
		const subtopic = event.target.getAttribute("subtopic")

		const data = 
		{
			userid: userid,
			coins: this.props.coins,
			topic: topic, 
			subtopic: subtopic
		}

		API.resetSubtopic(data).then(result =>
		{
			window.location.reload()
		})
	}

	render()
	{
		return(

			<div>
				<div className="row subtopic">
					<div className="col-md-1">
					</div>
					<div className="col-md-10">
						{this.props.name}
						<br></br>
						<span>
						{this.state.questions.map((element, i) => 
							{
								return <QuestionIcon key={i} correct={element.correct} wrong={element.wrong} challenge={element.challenge}/>
							})}
						</span>
						<div className="float-right">
							{this.state.percent}%
						</div>
					</div>
					<div className="col-md-1">
						<div className="text-center float-right">
							<i className="fas fa-trash-alt fa-2x reset" userid={this.props.userid} topic={this.props.topic} subtopic={this.props.name} onClick={this.reset}></i>
							<br></br>
							Reset
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Report;