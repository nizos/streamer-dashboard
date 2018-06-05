/*
 * @Author: Nizars
 * @Date: 2018-06-05 01:59:00
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 01:59:00
 */

var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./dist"));
});
