
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')

const {prompt} = require('inquirer')
const fs = require('fs')
const path = require('path')

const dist_folder = path.resolve(__dirname, 'dist')
const dist_path = path.join(dist_folder, 'index.html')

const render = require('./src/page-template')

const teamArray = []
function init(){


function chooseNextEmployee(){
prompt([{
    type: 'list',
    name:'nextRole',
    choices: ['Intern', 'Engineer', 'Print']
}])
.then(({nextRole})=>{
    switch(nextRole){
        case 'Engineer':
            createEngineer()
        break;
        case 'Intern':
            createIntern()
        break;
        case 'Print':
        printEmployees()
        break;
    }
})
}

function createManager() {
  console.log(`
  Start With Your Manager's Information!
  `)  
  prompt(
    [
        {
            type: 'input',
            name: 'name',
            message: 'What is your first name?'
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your Employee ID number?'
        },
        {
            type:'input',
            name: 'email',
            message: 'What is your Email address?'
        },
        {
            type:'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
    ]
  )
  .then((managerData) => {
    const manager = new Manager(managerData.name, managerData.email, managerData.id,managerData.officeNumber)
    teamArray.push(manager)
    chooseNextEmployee()
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function createIntern() {
    prompt(
      [
          {
              type: 'input',
              name: 'name',
              message: 'What is your first name?'
          },
          {
              type: 'number',
              name: 'id',
              message: 'What is your Employee ID number?'
          },
          {
              type:'input',
              name: 'email',
              message: 'What is your Email address?'
          },
          {
            type:'input',
            name: 'school',
            message: 'What is your School name?'
        },
      
      ]
    )
    .then((internData) => { 
        const intern = new Intern(internData.name, internData.email, internData.id, internData.school)
        teamArray.push(intern)
        chooseNextEmployee()
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }

function createEngineer() {
    prompt(
      [
          {
              type: 'input',
              name: 'name',
              message: 'What is your first name?'
          },
          {
              type: 'number',
              name: 'id',
              message: 'What is your Employee ID number?'
          },
          {
              type:'input',
              name: 'email',
              message: 'What is your Email address?'
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
          }
      
      ]
    )
    .then((engineerData) => {
      const engineer = new Engineer(engineerData.name, engineerData.email, engineerData.id, engineerData.github)
      teamArray.push(engineer)
      chooseNextEmployee()
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }

function printEmployees(){
  if (!fs.existsSync(dist_folder)) {
    fs.mkdirSync(dist_folder)
  }
  fs.writeFileSync(dist_path, render(teamArray))
}
console.log(`
|==========================|
|Employee Profile Generator|
|==========================|
`)
createManager();
}
init()


















 