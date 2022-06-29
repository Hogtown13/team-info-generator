

const teamRender = (team) => {
    console.log(team)
    const managerCard = (manager) => {
        return `
    <div>
    <h2>${manager.getName()}</h2>
    <p>${manager.getRole()}</p>
    <p>${manager.getId()}</p>
    <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a>
    <p>${manager.getOffice()}</p>
    </div>
    `
    }
    const engineerCard = (engineer) => {
        return `
    <div>
    <h2>${engineer.getName()}</h2>
    <p>${engineer.getRole()}</p>
    <p>${engineer.getId()}</p>
    <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a>
    <p>Github: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></p>

    </div>
    `
    }
    const internCard = (intern) => {
        return `
    <div>
    <h2>${intern.getName()}</h2>
    <p>${intern.getRole()}</p>
    <p>${intern.getId()}</p>
    <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a>
    <p>${intern.getSchool()}</p>

    </div>
        `
    }

    const html = []

    html.push(
        team
            .filter(employee => employee.getRole() === 'Manager')
            .map(manager => managerCard(manager))
    )
    html.push(
        team
            .filter(employee => employee.getRole() === 'Intern')
            .map(manager => internCard(manager))
            .join('')

    )
    html.push(
        team
            .filter(employee => employee.getRole() === 'Engineer')
            .map(manager => engineerCard(manager))
            .join('')
    )


    return html.join('')
}


module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamProfileGenerator</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section>
        ${teamRender(team)}
    </section>

    
</body>
</html>
    `
}