import React from 'react'
import Counter from './Counter'

class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: ''
        }
    }

    answer() {
        this.setState({
            word: this.state.word + 'fuck '
        })
    }

    componentWillUpdate() {
        console.log('DIALOG: componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('DIALOG: componentDidUpdate')
    }

    render() {
        console.log('DIALOG: render')
        return (
            <div>
                <h3>- Don't speak the word "fuck"</h3>
                <h3>- {this.state.word}</h3>
                <div>
                    <button onClick={this.answer.bind(this)}>answer!</button>
                </div>
                <Counter />
            </div>
        )
    }
}

export default Dialog