/*globals define*/
/*jshint node:true*/

/**
 * Generated by WebGME cli for the webgme on Fri Jul 24 2015 19:22:46 GMT-0500 (CDT).
 */

define(["addon/AddOnBase"], function (AddOnBase) {
  "use strict";
  var OtherAddOn = function (Core, storage, gmeConfig, logger, userId) {
    AddOnBase.call(this, Core, storage, gmeConfig, logger, userId);
  };

  // Prototypal inheritance from AddOnBase.
  OtherAddOn.prototype = Object.create(AddOnBase.prototype);
  OtherAddOn.prototype.constructor = OtherAddOn;

  OtherAddOn.prototype.getName = function () {
    return "OtherAddOn";
  };

  OtherAddOn.prototype.update = function (root, callback) {
    this.logger.info(
      "OtherAddOn",
      new Date().getTime(),
      "update",
      this.core.getGuid(root),
      this.core.getHash(root)
    );
    // Add update logic here!
    // TODO

    callback(null);
  };

  OtherAddOn.prototype.query = function (parameters, callback) {
    this.logger.info("OtherAddOn", new Date().getTime(), "query", parameters);
    // Add query logic here!
    // TODO
    callback(null, parameters);
  };

  OtherAddOn.prototype.stop = function (callback) {
    var self = this;

    AddOnBase.prototype.stop.call(this, function (err) {
      self.logger.info("OtherAddOn", new Date().getTime(), "stop");
      callback(err);
    });
  };

  //OtherAddOn.prototype.start = function (parameters, callback) {
  //    AddOnBase.prototype.start.call(this, parameters, callback);
  //    this.logger.info('OtherAddOn', new Date().getTime(), 'start');
  //};

  return OtherAddOn;
});
