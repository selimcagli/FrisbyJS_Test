const frisby = require('frisby');
const baseUrl = 'http://services.groupkt.com';

beforeAll(function() {
    frisby.addExpectHandler('isDataOrdered', function(response, arrayToCheckOrder, fieldToCompare) {

        let array = response._body;
        var checkListArray = arrayToCheckOrder.split('.');

        for (var a = 0; a < checkListArray.length; a++) {
            array = array[checkListArray[a]];
        }

        var isOrdered = true;

        for (let i = 0; i < array.length - 1; i++) {
            var a = array[i];
            var b = array[i + 1];

            if (a[fieldToCompare] > b[fieldToCompare]) {
                console.log("First Compare Value: " + a[fieldToCompare] + ", Second Compare Value: " + b.name);
                isOrdered = false;
                break;
            }
        }

        expect(isOrdered).toBe(true);
    });
});


it('test1a', function(done) {
    frisby.get(baseUrl + '/country/get/all')
        .expect('header', 'content-type', 'application/json;charset=UTF-8')
        .expect('status', 200)
        .expect('json', {
            RestResponse: {}
        })
        .done(done);
});

it('test1b', function(done) {
    frisby.get(baseUrl + '/country/get/all')
        .expect('json', {
            RestResponse: {
                result: []
            }
        })
        .then(function(res) {
            expect(res._body.RestResponse.result.length).toBe(249)
        })
        .done(done);
});

it('test1c', function(done) {
    frisby.get(baseUrl + '/country/get/all')
        .expect('json', 'RestResponse.result.?', {
            name: 'Turkey',
            alpha2_code: 'TR',
            alpha3_code: 'TUR'
        })
        .done(done);
});

it('test1d', function(done) {
    frisby.get(baseUrl + '/country/get/all')
        .expect('isDataOrdered', 'RestResponse.result', 'name')
        .done(done);
});

afterAll(function() {
    frisby.removeExpectHandler('isDataOrdered');
});
