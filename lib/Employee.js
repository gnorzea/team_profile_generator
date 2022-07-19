const inquirer = require('inquirer');



function Employee() {
    // this.name = name;
    // this.id = id;
    // this.email = email;

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        }
    ]);
}

    module.exports = {Employee};