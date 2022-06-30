

const teamRender = (team) => {
    console.log(team)
    const managerCard = (manager) => {
        return `
    <div class='card text-center rounded'>
    <div class='card-header text-center'>
    <h2>${manager.getName()}</h2>
    </div>
    <p>${manager.getRole()}</p>
    <p>${manager.getId()}</p>
    <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a>
    <p>${manager.getOffice()}</p>
    </div>
    `
    }
    const engineerCard = (engineer) => {
        return `
    <div class='card text-center rounded'>
    <div class='card-header text-center'>
    <h2>${engineer.getName()}</h2>
    </div>
    <p>${engineer.getRole()}</p>
    <p>${engineer.getId()}</p>
    <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a>
    <p>Github: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></p>

    </div>
    `
    }
    const internCard = (intern) => {
        return `
    <div class='card text-center rounded'>
    <div class='card-header text-center'>
    <h2>${intern.getName()}</h2>
    </div>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title>TeamProfileGenerator</title>
</head>
<body>
<header class='rounded'>
  <nav>
    <h1> My Team </h1>
  </nav>  
</header>
    <section class='card-group spacer d-flex flex-wrap'>
        ${teamRender(team)}
    </section>

    
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>
    `
}