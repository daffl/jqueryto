module.exports = function(grunt) {

  grunt.initConfig({
    landslide: {
      output: 'index.html',
      markdown: 'readme.md',
      theme: 'theme'
    },
    watch: {
      scripts: {
        files: 'readme.md',
        tasks: ['landslide']
      }
    }
  });

  grunt.task.registerTask('landslide', 'Generate slides.', function() {
    var settings = grunt.config('landslide');
    var done = this.async();

    grunt.util.spawn({
      cmd: 'landslide',
      args: [ settings.markdown, '-l', 'no', '-r', '-t', settings.theme, '-d', settings.output]
    }, function(error, stdout) {
      grunt.log.writeln(stdout);
      done();
    });
  });

  grunt.task.registerTask('default', 'watch');

  grunt.loadNpmTasks('grunt-contrib-watch');
};