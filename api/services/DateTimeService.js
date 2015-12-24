"use strict";

/**
 * DateTimeService
 *
 * @name DateTimeService
 *
 * @description :: DateTimeService
 */


/**
 * @name DateTimeService.generateNowDate
 *
 * Get today's date without h, m, s, ms
 * e.g. 2015:10.11-00:00:00
 * @returns {Date} today's date
 */
module.exports.generateNowDate = function generateNowDate() {
	var today = new Date();
	today.setUTCHours(0);
	today.setUTCMinutes(0);
	today.setUTCSeconds(0);
	today.setUTCMilliseconds(0);
	return today;
};