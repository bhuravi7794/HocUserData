export default function(state = [{ id: 1, name: 'Procuts 1.0', price: 10, quantity: 1 }
], action) {
    let products = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case 'ADD_PRODUCT': {
          let product = action.payload;
          product.id = Math.floor(Math.random() * 10000);
          products.push(product);
          return products;
        };

        case 'CHANGE_QUANTITY': {
            let { id, o } = action.payload,
                product = products.filter((p)=> { return p.id === id; })[0];
            if (o === 'ADD') {
              product.quantity += 1;
            } else {
              product.quantity -= 1;
            }
            return products;
        };
        default: {
          return state;
        }

    };
};