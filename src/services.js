import TaskListFactory from 'app/view/list';
import TaskView from 'app/view/task';
import TaskAddView from 'app/view/add';
import App from 'app/app';

const taskView = new TaskView();
const taskAddView = new TaskAddView();
const taskListFactory = new TaskListFactory(taskView);
const app = new App(taskListFactory, taskAddView);

export { app };
