const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const newPage = require('././src/page_template')
const teamData = [];


const teamQuestions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
      validate: (input) => {
        if (input !== "") {
          return true;
        } else {
          return "You must enter a name";
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's ID number?",
      validate: (input) => {
        if (isNaN(input)) {
          return true;
        } else {
          return "You must enter an ID (numeric values only)"
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email?",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
    
          return "Please enter a valid email"
        }
      },
    },
    {
      type: "list",
      name: "role",
      message: "What is the team member's role?",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);


  if (answers.role === "Manager") {
    const managerRole = await prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            return true;
          } else {
            return "Please enter an office number";
          }
        },
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerRole.officeNumber
    );
    rosterArray.push(newManager);

   
  } else if (answers.role === "Engineer") {
    const engineerRole = await prompt([
      {
        type: "input",
        name: "github",
        message: "What is the employee's GitHub user name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Enter a GitHub Username";
          }
        },
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      engineerRole.github
    );
    rosterArray.push(newEngineer);

   
  } else if (answers.role === "Intern") {
    const internRole = await prompt([
      {
        type: "input",
        name: "school",
        message: "What university did the Intern attend?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter a valid school name");
          }
        },
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internRole.school
    );
    rosterArray.push(newIntern);
  }
}; 

async function initQuestion() {
  await teamQuestions();

  const anotherMember = await prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add another member", "Create Roster"],
      message: "Add a new member, or create roster?",
    },
  ]);

  if (anotherMember.addMember === "Add another member") {
    return initQuestion();
  }
  return createTeam();
}

initQuestion();

function createTeam() {
  writeFileSync(
    "./dist/index.html",
    generateRoster(rosterArray)
  );
};