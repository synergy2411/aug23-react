import { IFormatter } from "../model/formatter";

export class ListTemplate {
  constructor(private liContainer: HTMLUListElement) {}

  render(doc: IFormatter) {
    const liElement = document.createElement("li");
    liElement.innerHTML = doc.getDetails();
    this.liContainer.append(liElement);
  }
}
