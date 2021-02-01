const profileDataArgs = process.argv.slice(2);

const name = profileDataArgs[0];
const github = profileDataArgs[1];
// or single line -> const [name, github] = profileDataArgs;


/*
const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
*/


// when a function has only a single statement, the curly braces, {}, are unnecessary and the return statement is implied.
/*
const generatePage0 = () => 'Name: Jane, Github: janehub';
console.log(generatePage0());
const generatePage1 = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
console.log(generatePage1('Jane', 'janehub'));

const generatePage2 = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };

console.log(name, github);

console.log(generatePage2(name, github));
*/
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };
console.log(generatePage(name, github));
