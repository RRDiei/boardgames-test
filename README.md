# *Boardgames*: A Vite + React Test Project

### What is it?
*Boardgames* is a nothing more and nothing less than a portfolio project to showcase [React](https://react.dev/) technologies. It is a static website that emulates a dynamic web application, but without a database or backend connection. As such, all changes made to any of its content is transient and will disappear on refresh.

### How does it do that?
*Boardgames* uses the following technologies to give the appearance of a complete web application:
- **Database** - *Boardgames* uses a JSON file as its database. I have populated it with some of my favourite boardgames so that there is some content in it after accessing and refreshing the page.
- **Routing** - *Boardgames* uses [react-router](https://reactrouter.com/) instead of backend router (such as [Express](https://expressjs.com/))
- **Authentication** - *Boardgames* implements a complete authentication workflow, complete with protected routes. There is even a registration process that utilises [bcryptfs](https://github.com/dcodeIO/bcrypt.js) to hash and compare passwords. This might not make a lot of sense in a static website, but I wanted to simulate the complete workflow, hashes and all. A second JSON file contains user data. I have a test user in it, but I encourage you to create and use your own! Instead of a JWT or symilar, *Boardgames* uses context to store logged in user information.
- **Error handling** - *Boardgames* leverages react-router's error handling for this purpose.
- **Notifications** - *Boardgames* uses [react-toastify](https://github.com/fkhadra/react-toastify) to notify the user of successful and unsuccessful actions. Notifications can be sent to different pages using react-router's useLocation() hook. This manages redirects gracefully.

### Other technologies
*Boardgames* uses [tailwindcss](https://tailwindcss.com/) for styling so that I don't have to write vanilla CSS for all styling needs.


### Acknowledgements
The boardgame images used in the *Boardgames* are links to [BoardGameGeek](https://boardgamegeek.com) images, and not my own. All rights reserved. 

The description of each boardgame comes from the boardgame publishers themselves.