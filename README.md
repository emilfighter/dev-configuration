## How to launch repo

1). Clone repository

2). Run command 
```
$ npm install
```
in command prompt inside project folder. If you don't have npm and gulpe installed - go to my below instruction

3). Run command 
```
$ gulp
```
in command prompt inside project folder.

4). Open browser with URL **localhost:8080**

5). Well done dude ! 


## General information how to start working with gulp streaming build system
Configuration of development environment based on GULP build system

1). Install node.js on your machine.

2). Install gulp globally using just installed npm package manager 
``
$ npm install gulp -g
```

3). At the command prompt, navigate to your project folder. If you use Windows, go to folder and click LEFT SHIFT + RIGHT mouse button and select option 'Open command window here'

4). Create file package.json by using command:
```
$ npm init
```
You will have to follow the setup wizard steps. There are optional steps and you can avoid them. Don't worry about what to write, which name to use.

5). Install gulp locally in your currently opened, project folder.
```
$ npm install gulp --save-dev
```
save-dev will add information about new packages to package.json file

6). Select the most suitable plugins for your project and install them. Example below:
```
$ npm install gulp-sass gulp-notify gulp-imagemin gulp-bower gulp-connect --save-dev
```
You can do above in one command or you can separate installation:
```
$ npm install gulp-sass --save-dev
```

7). The next step that you need to do is to create gulpfile.js. The file will contain information about the tasks, paths, configuration.

8). Understand gulpfile.js 

We have to split the file into several basic parts:
a). gulp require part - here we define reference to necessary gulp plugins which we plan to use in our project
```
var gulp = require('gulp'),
	connect = require('gulp-connect'), 
	bower = require('gulp-bower'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	images = require('gulp-imagemin');
```

b). gulp task part - here we define the behavior and mode of action for each plugins. It's like set of options, set of sources, destinations etc.
```
gulp.task('sass', function () {
  gulp.src(config.sass + '/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.cssDest));
});

 
gulp.task('sass:watch', function () {
  gulp.watch(config.sass + '/*.scss', ['sass']);
});
```

c). gulp default part - here we can define (in different ways) which plugins should start immediately. Of course we can call gulp plugin anytime using command like gulp sass, gulp images etc.
```
gulp.task('default', ['webserver', 'sass', 'images']);
```

d). gulp configuration part - here we can collect our specific configuration under readable object, variable, array. Whatsoever.

9). Thus prepared script needs only start. Use in command prompt:
```
$ gulp
```
Script will then be running 'default' task which contains few other subtasks like gulp sass, gulp images, gulp webserver

10). That's all. Thanks to gulp your development environment has been successfully configured. 
