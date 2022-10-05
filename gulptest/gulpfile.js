import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

//Наблюдетель за изменениями в файлах
function watcher(){
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html);

//Построение сценариев выполнения задач
const dev= gulp.series(reset, mainTasks, watcher);

//Выполнение сценария по умолчанию
gulp.task('default', dev);
