export class ListTemplate {
    constructor(liContainer) {
        this.liContainer = liContainer;
    }
    render(doc) {
        const liElement = document.createElement("li");
        liElement.innerHTML = doc.getDetails();
        this.liContainer.append(liElement);
    }
}
