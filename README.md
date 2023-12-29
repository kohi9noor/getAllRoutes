# getallroutes utility

As a backend engineer working with Express applications, keeping track of all defined routes, especially in larger and more complex projects, can be challenging. Traditional methods involve manual inspection of the codebase or relying on documentation, which may become outdated over time. This lack of visibility into the routes can hinder the development process, leading to potential issues such as:

- **Difficulty in Debugging:** Identifying the source of issues becomes challenging when the structure of routes is not well-known.

- **Maintenance Challenges:** Updating or adding new routes without a clear understanding of the existing routes may lead to conflicts or unintentional changes.

- **Collaboration Issues:** Team members may face difficulties collaborating on projects when there's no easy way to visualize and communicate the route structure.

## GetAllRoutes

is a utility for dynamically listing all routes in an Express application.

## Installation

Install the package using npm:

```bash
npm install getallroutes
```

### example

```
const express = require('express');
const { getRoutesList } = require('getallroutes');

const app = express();

// Define your routes and configure your Express app...

// Print the list of routes
getRoutesList(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


```

### example output

```
----------------------------------------
| GET    | /api/user
----------------------------------------
| POST   | /api/user/create
----------------------------------------
| GET    | /api/admin
----------------------------------------
```
