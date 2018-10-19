  // once for each event, not once for a combination of all events.
  Events.once = function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    var events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
    if (typeof name === 'string' && context == null) callback = void 0;
    return this.on(events, callback, context);
  };
   // Inversion-of-control versions of `once`.
  Events.listenToOnce = function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    var events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
    return this.listenTo(obj, events);
  };
 @@ -1030,7 +1030,7 @@
      options || (options = {});
       var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);
      if (_.isFunction(comparator)) comparator = comparator.bind(this);
       // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
@@ -1389,7 +1389,7 @@
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
        this.delegate(match[1], match[2], method.bind(this));
      }
      return this;
    },
@@ -1744,7 +1744,7 @@
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);
    this.checkUrl = this.checkUrl.bind(this);
     // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {