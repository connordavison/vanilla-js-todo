export default class App {
    constructor(taskListFactory, taskAddView) {
        this.taskListFactory = taskListFactory;
        this.taskAddView = taskAddView;
    }

    mount($root) {
        let $taskList = document.createElement('ul');
        let taskList = this.taskListFactory.create($taskList, []);
        let $add = this.taskAddView.render(taskList);

        $root.appendChild($add);
        $root.appendChild($taskList);
    }
}
