const managerCard = (manager)=>{
return `
<div>
<h2>${manager.getName()}</h2>
<p>${manager.getRole()}<p
<div>
`
}
module.exports= team => {
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
        <div  id='employee' class= 'card'></div>

        <div id='manager' class= 'card'></div>

        <div id='engineer' class= 'card'></div>

        <div id='intern' calss= 'card'></div>
    </section>

    
</body>
</html>
    `
}