import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
    try {
        //throw 'error1';
        await loadProductsFetch();

        const value = await new Promise((reslove,reject) => {
          // throw 'error2';
            loadCart(() => {
                //reject('error3');
                reslove('value3');
            });
        });

    } catch(error){
        console.log('unexpected error error.Please try again later.');
    }

   
    renderOrderSummary();
    renderPaymentSummary();


}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((reslove) => {
        loadCart(() => {
            reslove();
        });
    })
]).then((values)=>{
    console.log()
    renderOrderSummary();
    renderPaymentSummary();
});
*/



/*
new Promise((resolve) => {

    loadProducts(() => {

        resolve('value1');
    });

}).then((value) => {
    console.log(value);
    return new Promise((reslove) => {
        loadCart(() => {
            reslove();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

*/


/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/
