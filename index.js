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
        message: "Select a license",
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
    {
        type: "input",
        message: "Please link your email",
        name: "email"
    },
    {
        type: "input",
        message: "Please link your profile pic on github",
        name: "pic"
    },
];


inquirer.prompt(questions).then(function(response){
    fs.writeFileSync("readme.md", 
   ` ## ![License](https://img.shields.io/badge/license-${response.license}-blueviolet)
   ## ${response.title}
    ${response.description}
    ## Table of contents
* [Installation](##Installation)
* [Author](##Author)
* [License](##License)
* [Contributing](##Contributing)
* [Usage](##Usage)
* [Tests](##Tests)


    ## Deployed link
    - [Deployed Site]${response.deployedLink}
    ## Installation 
    ${response.install}
    ## Usage 
    ${response.usages}
    ## Contributing 
    * ${response.contribution}
    ## Tests
    - ${response.test}
    ##Author
    **${response.userN}**
    - [Email](${response.email})
    - [Link to Github](https://github.com/${response.userN})
    - ![Profile picture](${response.pic})
    `)
})