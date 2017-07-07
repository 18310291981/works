// 引入相应模块
var gulp = require("gulp"),
	angular = requier("gulp-connect");
// 	创建connect服务
gulp.task("connect",function(){
	connect.server({
		root:"connect",
		livereload:true
	});
})
// 创建监听页面路径及自动刷新
gulp.task("html"function(){
	gulp.src("./connect/myself.html").pipe(connect.reload());
});
//创建监听服务
gulp.task("watch",function(){
	// 监听路径及监听文件格式
	gulp.watch(["./connect/*html"],["html"])
});
// 创建默认进程 执行多个进程
gulp.task("default",["connect",'watch'])