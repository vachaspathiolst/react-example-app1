// Vue.component('my-component-name', {
//   // ... options ...
//   template: '<h3>Component</h3>'
// })
var AvatarImage = {
  props: ['image', 'title'],
  template: `<div>
    <img :src="image" class="avatar-img" style="max-width: 80px;" />
    <h3 class="avatar-hng"> {{title}}</h3>
    </div>
    `
};
var PriceLimit = {
  props: {
    price: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 100
    }
  },
  data: () => ({
    // limit: 100
  }),
  template: `
    <h3 :class="alertClass()">Price Rs {{price}}</h3>
  `,
  methods: {
    alertClass () {
      // console.log(this.price);
      // console.log(this.limit);
      var cls = (this.price > this.limit) ? 'red' : 'green';
      // console.log(cls);
      return cls;
    }
  }
}
var shopingListTable = {
  components: {
    AvatarImage,
    PriceLimit
  },
  data () {
    return {
      listData: [{
        id: 1,
        title: 'Pen',
        image: 'data:image/jpeg;base64,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',
        price: 20
      },
      {
        id: 2,
        title: 'Book',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU',
        price: 150
      },
      {
        id: 3,
        title: 'Table',
        image: 'https://www.ikea.com/in/en/images/products/malm-desk-white__0735975_pe740309_s5.jpg',
        price: 200
      }],
      styleSting: 'border: 1px solid #333; width:500px; padding:10px; border-radius:10px;'
    }
  },
  template: `
  <div :style="styleSting">
        <div v-for="item in listData" :key="item.id" class="table-row">
          <div><avatar-image :image="item.image" :title="item.title" /></div>
          <div><price-limit :price="item.price" /></div>
        </div>
  </div>
  `
}