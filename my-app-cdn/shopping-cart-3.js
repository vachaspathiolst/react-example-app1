// alert('')
// alert(React.version);
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

var shoplist = [];

class ShopingTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    
    return e(
      'tr',
      {
        id: `${this.props.id}`,
        className: this.state.selected ? 'table-row-selected' : 'table-row',
        onClick: () => {this.setState({selected: !this.state.selected});}
      },
      e(
        'td',
        {
          className: 'table-cell'
        },
        e(
          'img',
          {
            width: '100px',
            height: '150px',
            src: this.props.image
          }
        )
      ),
      e(
        'td',
        {
          className: 'table-cell'
        },
        `${this.props.title}`
      ),
      e(
          'td',
          {
            className: 'table-cell'
          },
        `${this.props.price}`
      ),
      e(
        'td',
        {
          className: 'table-cell'
        },
        `${this.props.category}`
        ),
        );
  }
}

class ShopingTableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    }
    this.loadStoreData();
  }
  componentDidMount () {
    alert('componentDidMount');
    this.loadStoreData();
  }
  loadStoreData(){
    let th = this;
    fetch('https://fakestoreapi.com/products').then(response => response.json())
    .then(data => {
        th.setState({tableData : data});
        // shoplist = data;
      });
  }
  render() {
    var arr = [];
    this.state.tableData.forEach(item =>
      arr.push(e(
        ShopingTableRow,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category,
          image: item.image
        }
      )
    ));
    return e(
      'tbody',

      ...arr
    )
  }
}
// fetch('https://fakestoreapi.com/products').then(response => response.json())
//   .then(data => {
//     shoplist = data;
//   });
  
  ReactDOM.render(e(ShopingTableBody), document.getElementById('shopping-table-row4'));