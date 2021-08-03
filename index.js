const inquirer = require("inquirer");
const fs = require("fs");

const html = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
    
</head>
<body>
    <div class="card" style="width: 18rem;text-align: center;margin:  100px auto;padding: 1rem;">
        <div class="card-body">
          <h5 class="card-title bg-primary text-white">Name: ${data.name}</h5>
          <h6 class="card-subtitle">Location: ${data.location}</p>
          <p class="card-text">Bio: ${data.bio}</p>
          <p class="card-text">Programming Languages: ${data.languages}</p>
          <p class="card-text">Mode: ${data.mode}</p>
          <p> LinkedIn: <a href="#" class="card-link">${data.linkedin}</a> </p>
          <p> GitHub: <a href="#" class="card-link">${data.github}</a> </P>
        </div>
      </div>
</body>
</html>
`

inquirer.prompt([
   { 
       type: 'input', 
       name: 'name',
       message: 'What is your name?'
   },
   {
       type: 'input',
       name: 'location',
       message: 'Where is your location?'
   },
   {
    type: 'input',
    name: 'bio',
    message: 'Provide a bio'
},
{
    type: 'checkbox',
    name: 'languages',
    message: 'What programming languages do you know',
    choices: ['HTML', ' JavaScript ', ' C++', ' Python']
},
{
    type: 'list',
    name: 'mode',
    message: 'Do you prefer darkmode or lightmode?',
    choices: ['darkmode', 'lightmode']
},
{
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn URL?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub URL?'
}
])

.then((data) => {
    const content = html (data);

    // from activity 13
    fs.writeFile('index.html', content, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
});
