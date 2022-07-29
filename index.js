import { writeFileSync } from "fs";
import { prompt } from "inquirer";

import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";

import generateRoster from "./src/html-template";
const rosterArray = [];


const teamQuestions = async () => {
  const answers = await prompt([
    {
      type: "input",
      message: "What is the team member's name?",
      name: "name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a team member's name");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the team member's ID number?",
      name: "id",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Invalid input, please enter team member's ID");
          return false;
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      message: "What is the team member's email?",
      name: "email",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email");
          return false;
        }
      },
    },
    {
      type: "list",
      message: "What is the team member's role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);


  if (answers.role === "Manager") {
    const managerRole = await prompt([
      {
        type: "input",
        message: "What is the Manager's office number",
        name: "officeNumber",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number");
            return false;
          } else {
            return true;
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
        message: "What is the employee's GitHub user name?",
        name: "github",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter a valid GitHub Username");
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
        message: "What university did the Intern attend?",
        name: "school",
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