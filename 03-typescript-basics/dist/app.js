import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/listTemplate.js";
const selPaymentType = document.getElementById("payment-type");
const txtAmount = document.getElementById("txtAmount");
const txtCreatedAt = document.getElementById("txtCreatedAt");
const btnAdd = document.querySelector("#btnAdd");
const listContainer = document.getElementById("list-container");
let container = new ListTemplate(listContainer);
btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    const paymentType = selPaymentType.value;
    let doc;
    if (paymentType === "invoice") {
        doc = new Invoice("Invoice", Number(txtAmount.value), new Date(txtCreatedAt.value));
    }
    else {
        doc = new Payment("Payment", Number(txtAmount.value), new Date(txtCreatedAt.value));
    }
    container.render(doc);
});
