import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=1JVOH21MhirKVtA1rmgjCFBpVyjHMV5U4mR1FGiO&nutrients=205&ndbno=' + params.number + '&nutrients=204&nutrients=208&nutrients=269';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.report.foods);
      return responseJSON.report.foods;
    }).fail(function(){
              console.log("error");
    });
  }
});










// console.log("response: " + responseJSON.list.item[0].ndbno);