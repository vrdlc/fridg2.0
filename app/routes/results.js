import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //console.log("params" + params);
    debugger;
    var url = 'http://api.nal.usda.gov/ndb/search/?format=json&q=' + params.food + '&max=25&offset=0&api_key=1JVOH21MhirKVtA1rmgjCFBpVyjHMV5U4mR1FGiO';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log("response: " + responseJSON.list.item[0].ndbno);
      return responseJSON.list.item;
    }).fail(function(){
              console.log("error");
    });
  }
});