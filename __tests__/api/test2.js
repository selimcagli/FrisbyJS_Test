const frisby = require('frisby');
const Joi = frisby.Joi;
const baseUrl = 'http://services.groupkt.com';

it('test2a', function (done) {
  frisby
    .get(baseUrl + '/state/get/USA/all')
    .expect('json', { RestResponse: { result : [] } })
    .done(done);
});

it('test2b', function (done) {
  frisby
    .get(baseUrl + '/state/get/USA/all')
    .expect('jsonTypes', 'RestResponse.result.*', {
        'id': Joi.number(),
        'country': Joi.string(),
        'name': Joi.string(),
        'abbr': Joi.string(),
        'area': Joi.string(),
        'largest_city': Joi.string(),
        'capital': Joi.string(),
    })
    .done(done);
});
