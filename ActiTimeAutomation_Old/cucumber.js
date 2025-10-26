module.exports = {
  default: {
    require: [
      'features/supportsteps/*.js',       // path to your step definition files
    ],
    format: [
      'progress',
      'allure-cucumberjs/reporter' // if you use Allure
    ],
    paths: [
      'features/*.feature'      // path to your feature files
    ],
 //   publishQuiet: true
  }
};
