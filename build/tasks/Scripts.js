// Lib
import Gulp from 'gulp';
import Bro from 'gulp-bro';
import Babelify from 'babelify';
import Size from 'gulp-size';
import Connect from 'gulp-connect';


// Config
import Config from '../Config';

/**
 * Build Scripts
 * @uses {gulp, gulp-bro, babelify, gulp-sourcemaps, gulp-uglify, gulp-size, gulp-connect}
 *
 * Build the JavaScript for the project.
 */
export default () => {

    return Gulp.src(Config.scripts.src_dir + Config.scripts.src_entry)
        .pipe(Bro({
            extensions: ['.js', '.jsx'],
            transform: [ Babelify.configure({ presets: ['@babel/preset-env', '@babel/preset-react'] }) ]
        }))
        .pipe(Size({ title: Config.scripts.dist_name, showFiles: true }))
        .pipe(Gulp.dest(Config.scripts.dist_dir))
        .pipe(Connect.reload());

};
