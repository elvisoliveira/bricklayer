(function() {

    var CalendarService = ng.core.Class({
        constructor: function CalendarService() {},
        getCalendar: function() {
            var dateArray = [];
            var date = moment().subtract(12, 'months').date(1);
            while (date <= moment()) {
                dateArray.push( moment(date).format('YYYY-MM-DD') )
                date = moment(date).add(1, 'days');
            }
            return dateArray;
        }
    });

    var AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1>Hello World!</h1>'
    })
    .Class({
        constructor: [CalendarService, function AppComponent(calendarService) {
            console.log(calendarService.getCalendar());
        }]
    });

    var AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent],
        providers: [CalendarService],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function() { }
    });

    ng.platformBrowserDynamic.platformBrowserDynamic()
        .bootstrapModule(AppModule);

})();
