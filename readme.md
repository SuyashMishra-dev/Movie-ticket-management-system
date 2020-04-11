# Movie Ticket Management System

The system should allow user to select movies from a list. Allow them to select seats. Filter the movies by genre and language. Bonus points for filtering the list by taking user location to the theatre destination. (Assume arbitrary location)
Skip through payment process but ensure the final screen has the details of the movie booked with an option to cancel.

##### Preference will be given to folks who write the solution in VanillaJS

##### Steps to Run project

`Clone The Repository`

`Open /views/index.html`

#### Data Flow And Design Structure

User will follow a decision tree

##### Steps

- Select User Location
- Based On Location Some movies shown
- After Selecting Movies User should be able to select threater
- Seat Selection and number of seats

<img src="assets/readme/process.png">

#### Todo

- [x] User Able to Select Location
- [x] User Able to Select threater
- [x] User Able to Select Movie
- [x] User Able to Select Seats Choice
- [x] Three Different Classes Of Seats
  - Gold
  - Platinum
  - Silver
- [x] Bill Calculated With Booked Seat Summary
- [x] Confirmation Page

##### Screens

###### Home Screen

User Should be able to select the Location

<img src="assets/readme/1.png" style="width:800px;height:600px">

###### Theatre Screen

User Should be able to select the Theatre

<img src="assets/readme/2.png" style="width:800px;height:600px">

###### Movie Screen

User Should be able to select the Movie Running at the location and Selected Theatre

<img src="assets/readme/3.png" style="width:800px;height:600px">

###### Select Seats Screen

User Should be able to select the Preferred Seat From Various Classes

- Gold
- Silver
- Platinum

<img src="assets/readme/4.png" style="width:800px;height:600px">

###### Confimation Screen

User Should be able to see the Booked Details Confirmation

<img src="assets/readme/5.png" style="width:800px;height:600px">
