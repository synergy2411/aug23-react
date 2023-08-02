import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { IFormatter } from "./model/formatter.js";
import { ListTemplate } from "./classes/listTemplate.js";

const selPaymentType = document.getElementById(
  "payment-type"
) as HTMLSelectElement;
const txtAmount = document.getElementById("txtAmount") as HTMLInputElement;
const txtCreatedAt = document.getElementById(
  "txtCreatedAt"
) as HTMLInputElement;
const btnAdd = document.querySelector("#btnAdd") as HTMLButtonElement;
const listContainer = document.getElementById(
  "list-container"
) as HTMLUListElement;

let container = new ListTemplate(listContainer);

btnAdd.addEventListener("click", function (event) {
  event.preventDefault();

  const paymentType = selPaymentType.value;

  let doc: IFormatter;

  if (paymentType === "invoice") {
    doc = new Invoice(
      "Invoice",
      Number(txtAmount.value),
      new Date(txtCreatedAt.value)
    );
  } else {
    doc = new Payment(
      "Payment",
      Number(txtAmount.value),
      new Date(txtCreatedAt.value)
    );
  }

  container.render(doc);
});
