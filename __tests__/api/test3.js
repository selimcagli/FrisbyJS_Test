const frisby = require('frisby');
const baseUrl = 'http://services.groupkt.com';

it('test3', function(done) {
    frisby
        .get(baseUrl + '/country/get/all')
        .then(function(countryResponse) {

            let resultData = countryResponse._body.RestResponse.result;
            let alpha3_code = GetDataInArrayByPropertyName(resultData, "name", "India", "alpha3_code");
            let stateUrl = baseUrl + '/state/get/' + alpha3_code + '/all';

            return frisby
                .get(stateUrl)
                .then(function(stateResponse) {
                    let largest_city = GetDataInArrayByPropertyName(stateResponse._body.RestResponse.result, "id", 65, "largest_city");
                    expect(largest_city).toBe("Srinagar Jammu");
                })
        })
        .done(done);
});


function GetDataInArrayByPropertyName(dataInArray, searchPropertyName, searchPropertyValue, resultValue) {
    var result;
    for (var i = 0; i < dataInArray.length; i++) {
        if (dataInArray[i][searchPropertyName] === searchPropertyValue) {
            result = dataInArray[i][resultValue];
            break;
        }
    }
    return result;
}
