// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currentWeatherURL: 'https://api.openweathermap.org/data/2.5/weather?q=',
  forecastWeatherURL: 'https://api.openweathermap.org/data/2.5/forecast?q=',
  urlKey: '&cnt=40&appid=43b3a8d1ae62fb43a71860c20786c196&units=metric'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
