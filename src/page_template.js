const generateRoster = (roster) => {

    const generateEngineerCard = (engineer) => {
        return `
          <div class="card employee-card">
              <div class="card-header bg-warning text-white">
                  <h2 class="card-title">${engineer.name}</h2>
                  <h3 class="card-title"><i class="bi bi-laptop mr-1"></i>Engineer</h3>
              </div>
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${engineer.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                  </ul>
              </div>
          </div>
          `;
      };

      const generateInternCard = (intern) => {
        return `
          <div class="card employee-card">
              <div class="card-header bg-info text-white">
                  <h2 class="card-title">${intern.name}</h2>
                  <h3 class="card-title"><i class="bi bi-book"></i>Intern</h3>
              </div>
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${intern.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                      <li class="list-group-item">School: ${intern.school}</li>
                  </ul>
              </div>
          </div>
          `;
      };

    const generateManagerCard = (manager) => {
        return `
          <div class="card employee-card">
              <div class="card-header bg-danger text-white">
                  <h2 class="card-title">${manager.name}</h2>
                  <h3 class="card-title"><i class="bi bi-cup mr-1"></i>Manager</h3>
              </div>
              <div class="card-body">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${manager.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                  </ul>
              </div>
          </div>
          `;
      };
      

  const html = [];

  html.push(
    roster
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineerCard(engineer))
      .join("")
  );
  html.push(
    roster
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateInternCard(intern))
      .join("")
  );
  html.push(
    roster
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManagerCard(manager))
  );
  

  return html.join("");
};


module.exports = (roster) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Team Roster</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <link rel="icon" href="images/logo/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  </head>
  <body>
      <div class="container-fluid gradient-custom">
          <div class="row gradient-custom">
              <div class="col-12 jumbotron mb-3 gradient-custom">
                  <h1 class="text-center">Team Roster</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center mt-5">
                  ${generateRoster(roster)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };
