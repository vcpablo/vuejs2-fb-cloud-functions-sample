exports.input = [{
  origin: '011',
  destination: '018',
  minutes: '50',
  plan: {
    uuid: 'r9nSGtMKFtMFo4GwYOaW',
    id: 2,
    minutes:60,
    title: 'TalkMore 60'
  },
  uuid: 'ZyqvyaSN7V0vGTUzqu9H',
  minute_price: 0.9
}, {
  origin: '016',
  destination: '011',
  minutes: '1200',
  plan: {
    uuid: 'r9nSGtMKFtMFo4GwYOaW',
    id: 2,
    minutes: 60,
    title: 'TalkMore 60'
  },
  uuid: 'YVmk1qsUGwpThznQuX2F',
  minute_price: 2.9
}, {
  origin: '017',
  destination: '011',
  minutes: '12',
  plan: {
    uuid: 'Ax0xIeKj2ww421cLhAgT',
    id: 3,
    minutes: 120,
    title: 'TalkMore 120'
  },
  uuid: 'r3Z98g7G6DErbJyt0J9l',
  minute_price: 2.7
}];

exports.output = [{
  data: {
    origin: '011',
    destination: '018',
    plan: 'TalkMore 60',
    minutes: 50,
    withPlan: 0,
    withoutPlan: 45
  }
},{
  data: {
    origin: '016',
    destination: '011',
    plan: 'TalkMore 60',
    minutes: 1200,
    withPlan: '3306330.60',
    withoutPlan: 3480
  }
}, {
  data: {
    origin: '017',
    destination: '011',
    plan: 'TalkMore 120',
    minutes: 12,
    withPlan: 0,
    withoutPlan: 32.400000000000006
  }
}];