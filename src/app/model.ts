export class Model {
    user;
    items;

    constructor() {
        this.user = "Admoa";
        this.items = [new TodoItem("Buy Flowers", false),
                            new TodoItem("Get Shoes", false),
                            new TodoItem("Collecet Ticket", false)]
    }
}

export class TodoItem {
    action;
    done;
    constructor(actions, done) {
        this.action = actions;
        this.done = done;
    }
}
