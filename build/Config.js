// Globals
const root = process.cwd();
const source = root + '/frontend';
const dist = root + '/public/assets';

/**
 * Build Config
 *
 * Contains all the paths for frontend assets and
 * distribution folders etc.
 */
export default {
    root: root,
    source: source,
    dist: dist,
    styles: {
        src_dir: `${source}/styles/`,
        src_files: '**/**/**/**.scss',
        src_entry: 'styles.scss',
        dist_dir: `${dist}/css/`,
        dist_name: 'styles.css'
    },
    scripts: {
        src_dir: `${source}/app/`,
        src_files: '**/**/**.js',
        src_entry: 'entry.js',
        dist_dir: `${dist}/js/`,
        dist_name: 'bundle.js'
    },
    images: {
        src_dir: `${source}/images/`,
        src_files: '**/**/**.{jpg,jpeg,JPG,png,gif}',
        dist_dir: `${dist}/img/`,
    },
    server: {
        root: root,
        port: 3000
    }
}
