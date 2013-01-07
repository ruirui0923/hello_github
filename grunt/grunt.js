module.exports = function(grunt) {

// Grunt Plugins
  grunt.loadNpmTasks('grunt-macreload');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-reload');

// Project Configuration
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '<%= grunt.template.today("yyyy") %> '
    },
    macreload: {
      fuckyeah: {
        browser: 'chrome',
        editor: 'sublime'
      }
    },
    // reload: {
    //   port: 3000,
    //   iframe: {
    //     target: 'http://stg-petpic.jp'
    //   }
    // },
    // Executes compass compile
    compass: {
      app: {
        config: 'config.rb'
      }
    },
    csso: {
      app: {
        src: '../files/css/app.css'
      },
      pc: {
        src: '../files/css/pc.css'
      },
      sp: {
        src: '../files/css/sp.css'
      },
      sp_tv: {
        src: '../files/css/sp_tv.css'
      }
    },
    lint: {
      files : [
          '../files/js/_dev/jquery.pullToRefresh.js',
          '../files/js/_dev/jquery.setSwipeBtn.js',
          '../files/js/_dev/_setting.js',
          '../files/js/_dev/_app.js',
          '../files/js/_dev/_contents.js',
          '../files/js/_dev/_commonView.js',
          '../files/js/_dev/_contents_other.js',
          '../files/js/_dev/_view.js',
          '../files/js/_dev/_action.js',
          '../files/js/_dev/_like.js',
          '../files/js/_dev/_post.js',
          '../files/js/_dev/_tabbar.js',
          '../files/js/_dev/_page_top.js',
          '../files/js/_dev/_page_migration.js',
          '../files/js/_dev/_page_new.js',
          '../files/js/_dev/_page_fav.js',
          '../files/js/_dev/_page_hist.js',
          '../files/js/_dev/_page_my.js',
          '../files/js/_dev/_page_talk.js',
          '../files/js/_dev/_page_talk_detail.js',
          '../files/js/_dev/_page_enquete.js',
          '../files/js/_dev/_page_advice.js',
          '../files/js/_dev/_page_socialSelect.js',
          '../files/js/_dev/_page_election.js',
          '../files/js/_dev/_page_other.js',
          '../files/js/_dev/_datauri.js'
      ]
    },
    concat: {
      dist : {
        src : [
          '../files/js/_dev/dust-full-1.0.0-min.js',
          '../files/js/_dev/jquery.ba-throttle-debounce.min.js',
          '../files/js/_dev/jquery.pullToRefresh.js',
          '../files/js/_dev/jquery.setSwipeBtn.js',
          '../files/js/_dev/_setting.js',
          '../files/js/_dev/_app.js',
          '../files/js/_dev/_contents.js',
          '../files/js/_dev/_commonView.js',
          '../files/js/_dev/_contents_other.js',
          '../files/js/_dev/_view.js',
          '../files/js/_dev/_action.js',
          '../files/js/_dev/_like.js',
          '../files/js/_dev/_post.js',
          '../files/js/_dev/_tabbar.js',
          '../files/js/_dev/_page_top.js',
          '../files/js/_dev/_page_migration.js',
          '../files/js/_dev/_page_new.js',
          '../files/js/_dev/_page_fav.js',
          '../files/js/_dev/_page_hist.js',
          '../files/js/_dev/_page_my.js',
          '../files/js/_dev/_page_talk.js',
          '../files/js/_dev/_page_talk_detail.js',
          '../files/js/_dev/_page_enquete.js',
          '../files/js/_dev/_page_advice.js',
          '../files/js/_dev/_page_socialSelect.js',
          '../files/js/_dev/_page_election.js',
          '../files/js/_dev/_page_other.js',
          '../files/js/_dev/_datauri.js'
        ],
        dest : '../files/js/_dev/_girlstalk.js'
      }
    },
    // Create not minified file for staging-branch-environment
    copy: {
      dist: {
        files : {'../files/js/girlstalk.min.js' : '<config:concat.dist.dest>'}
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:min.dist.dest>'],
        dest: '../files/js/girlstalk.min.js'
      }
    },
    watch: {
      style: {
        files: ['./css/sample.css','index.html'],
        tasks: ['macreload']
      },
      script: {
        files: ['<config:lint.files>'],
        tasks: ['lint', 'concat', 'copy']
      }
    }
  });
  
  // Default Task
  grunt.registerTask('default', ['server']);
  // Indivisual Task
  grunt.registerTask('kj', ['macreload','watch:style']);
  grunt.registerTask('kk', ['lint', 'concat', 'copy', 'watch:script']);
  grunt.registerTask('deploy', ['compass', 'csso', 'concat', 'copy', 'min']);
};