import { ToyReact, Component } from './ToyReact'

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button className="square" onClick={ () => this.setState({value: 'x'}) }>
        { this.state.value ? this.state.value : '' }
      </button>
    )
  }
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square value={i} />
    )
  }
  render() {
    return (
      <div>
        <div className="board-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="board-row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="board-row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
      </div>
    )
  }
}

const board = <Board></Board>

ToyReact.render(
  board,
  document.body
)

/*
const h = ToyReact.createElement
const a = <div name="a" id="id-a">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

h('div', {
  name: 'a',
  id: 'id-a',
  h('span', null, '1')
  h('span', null, '2')
  h('span', null, '3')
})
*/
