const { getStreams } = require('./eklentiler/sinewix.js');


getStreams('550', 'movie', null, null).then(function(streams) {
  console.log('Film stream sayısı:', streams.length);
  streams.forEach(function(s) {
    console.log(s.name, '-', s.url);
  });
}).catch(console.error);


getStreams('1396', 'tv', 1, 1).then(function(streams) {
  console.log('Dizi stream sayısı:', streams.length);
  streams.forEach(function(s) {
    console.log(s.name, '-', s.url);
  });
}).catch(console.error);