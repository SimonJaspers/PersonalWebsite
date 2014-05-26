// Simon Jaspers
// 03/2014

/** 
 * module_1()
 * This function encapsulates all variables and methods used within module 1. 
 * @type {Object}
 * @return {} returns nothing
 * @name Test case
 * @namespace Holds all functionality
 */
var module = (function () {
    "use strict";
    /**
     * Represents an example class.
     * @param {String} name - The name you want to give to your class instance.
     * @constructor
     */
    function MyClass(name) {
        var myname = name;

        /**
         * Gets the name of the instance.
         * @returns {String} - Your name
         */
        this.getName = function () {
            return myname;
        };
        /**
         * Sets a new name for your instance.
         * @param {String} name - The name you want to give to your class instance.
         * @returns {String} - The newly set name
         */
        this.setName = function (name) {
            myname = name;
            return myname;
        };
    }

    window.aClass = new MyClass('Simon');
    console.log(window.aClass.getName());
}());