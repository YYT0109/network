var gulp=require('gulp');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var concat=require('gulp-concat');
var server=require('gulp-webserver')

/*var watcher = gulp.watch('index.js', ['uglify','reload']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
gulp.watch('index.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});*/


//task函数：定义一个gulp任务
gulp.task('compress',function(){
	//src方法：获取指定路径的文件
	//pipe方法：任务节点，在这个方法中对获取到的文件进行相应的操作
	//dest方法：输出文件
	gulp.src('./js/index.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))
})

/*启动sass*/
gulp.task('sass',function(){
	gulp.src('./scss/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist'))
})

/*合并文件*/
gulp.task('concat',function(){
	gulp.src("./js/*.js")
	.pipe(concat('concat.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'))
})

/*启动服务器*/
var url=require('url');
var fs=require('fs');
gulp.task('server',['start'],function(){
	gulp.src("./")
	.pipe(server({
		open:'index.html',
		livereload:true,
		directoryListing:true,
		middleware:function(req,res,next){
            var urlObj=url.parse(req.url);
           
             res.setHeader('Content-Type','application/json');
             if(urlObj.path=='/data/data.json'){
             	var data=fs.readFileSync('data/data.json');
             	res.end(data);
             }
            next();
		}
	}))
})

gulp.task('start',function(){
   gulp.watch('./scss/index.scss',['sass'])
   gulp.watch('./js/*.js',['concat'])
   gulp.watch('index.html')
})

