export default class Task {
    constructor(title) {
        this.title = title;
        this.complete = false;
    }

    getTitle() {
        return this.title;
    }
    
    toggleComplete() {
        this.complete = !this.complete;
    }

    isComplete() {
        return this.complete;
    }
}
