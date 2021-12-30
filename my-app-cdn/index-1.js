// alert('')
alert(React.version);
// class ShoppingList extends React.Component {
//       render() {
//             return (
//             <div className="shopping-list">
//             <h1>Shopping List for {this.props.name}</h1>
//             <ul>
//                   <li>Instagram</li>
//                   <li>WhatsApp</li>
//                   <li>Oculus</li>
//             </ul>
//             </div>
//             );
//       }
// }

// 'use strict';

// const e = React.createElement;

class ShoppingListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    if (this.state.selected) {
      return 'Div hit..!!';
    }

    return React.createElement(
      'div',
      { onClick: () => this.setState({ selected: true }) },
      'this is div | click'
    );
  }
}
// const domContainer = document.querySelector('#start-ehere');
ReactDOM.render(React.createElement(ShoppingListRow), document.getElementById('start-ehere'));