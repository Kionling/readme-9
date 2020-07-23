var util = require("util");
var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");


var questions = [
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "list",
        message: "",
        choices: [
            'MIT',
            'GPL',
            'ISC'

        ],
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },

    
]