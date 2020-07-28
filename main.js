import { ToyReact, Component } from './ToyReact'
import { log } from './lib'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hello</span>
        <span>World</span>
        <div>
          { this.children }
        </div>
      </div>
    )
  }
}

const a = <MyComponent name="a" id="id-a">
  <div>123</div>
  <div>456</div>
</MyComponent>

// document.body.appendChild(a)

ToyReact.render(
  a,
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
