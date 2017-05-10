# Identity Portal

## Overview

This web app has simple and modern design form to have user details and some documents.

This app is purely built with ReactJS and use react-router to route to other pages. 

## Validations

User has to fill all the required fields to proceeds next page.

The submit buttons won't be available until user fill the fields. 

Rather than displaying warning or error message when user did something wrong,

prevent them from doing it at the first place is better for user experience.

## Install and setup 

Run 

```
npm install

npm start
```

then go to 

```
http://localhost:8080
```

in your browser


## How to use

User will need to wrtie their name, date of birth, address and passport number.

After that, user can click continue button to go file upload page.

User will need be asked to select citizen or foreigner. Default setting is citizen. 

If they are citizen, then they only need to upload 3 documents, lease, driver license and passport.

If the user is foreigner, he or she needs to upload 2 additional documents, utility bill and rent receipt. 

User can delete documents buy selecting checkbox on the left sid of file name and click the delete button on the bottom.

After finishing that, user can click submit button to procced.

Then user will see completion page.
