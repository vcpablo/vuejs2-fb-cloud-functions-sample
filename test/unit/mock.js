const areaCodes = [{
  id: '011',
  title: '011'
}, {
  id: '016',
  title: '016'
}, {
  id: '017',
  title: '017'
}, {
  id: '018',
  title: '018'
}];

export const areaCodesMock = function request(url) {
  return new Promise((resolve, reject) => {
      process.nextTick(() => resolve(areaCodes)
    );
  });
}