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
// };

'use strict';

const e = React.createElement;

class ShopingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {

    return e(
      'table',
      null,
      e(
        'tr',
        {
          className: this.state.selected ? 'table-row-selected' : 'table-row'
        },
        e (
          'td',
          {
            className: 'table-cell'
          },
          e (
            'input',
            {
              type: 'checkbox',
              checked: this.state.selected,
              onChange: () => this.setState({ selected: !this.state.selected })
            },
          )
        ),
        e (
          'td',
          {
            className: 'table-cell'
          },
          'table cell 1'
        ),
        e (
          'td',
          {
            className: 'table-cell'
          },
          'table cell 2'
        ),
      )
    );
  }
}
// const domContainer = document.querySelector('#start-ehere');
ReactDOM.render(e(ShopingTable), document.getElementById('shopping-table-row'));
ReactDOM.render(e(ShopingTable), document.getElementById('shopping-table-row1'));
ReactDOM.render(e(ShopingTable), document.getElementById('shopping-table-row2'));