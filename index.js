var util = require("util");
var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");


var questions = [
    {
        type: "input",
        message: "Enter repo title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Project description",
        name: "description"
    },
    {
        type: "input",
        message: "Installation steps for this repo",
        name: "install"
    },
    {
        type: "input",
        message: "",
        name: ""
    },
    {
        type: "input",
        message: "Enter Deployed Link",
        name: "deployedLink"
    },
    {
        type: "input",
        message: "Usage Instructions:",
        name: "usage"
    },
    {
        type: "list",
        message: "",
        choices: [
            'MIT',
            'GPL',
            'ISC'

        ],
        name: "license"
    },
    {
        type: "input",
        message: "Github username",
        name: "userN"
    },
    {
        type: "input",
        message: "Who contributed to this assignment?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the testing procedures?",
        name: "testing"
    },
];


inquirer.prompt(questions).then(function(response){
    
})