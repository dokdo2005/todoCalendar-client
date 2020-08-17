import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: null,
            currentDate: null
        }
        this.getTime = null
        this.getDate = null
    }

    componentDidMount() {
        this.getTime = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            })
        }, 1000);
        this.getDate = setInterval(() => {
            this.setState({
                currentDate: new Date().toLocaleDateString()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.getTime);
        clearInterval(this.getDate);
    }

    render() {
        if (this.state.currentTime === null || this.state.currentDate === null) {
            return (
                <>
                    Loading...
                </>
            )
        }
        return (
            <>
                <h2>{this.state.currentTime}</h2>
                <h3>{this.state.currentDate}</h3>
            </>
        )
    }
}
