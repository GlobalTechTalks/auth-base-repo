# auth-base-repo

Motivation: This project basically is meant for providing a base template for other projects ( internal as well as external ). Most of the time is spent setting up the project & this boilerplate code will help us kickstart our projects quickly.

## About
This is the base repo for all our future projects & contains code for authentication purposes routes.

The routes present in this repo are:

- Sign up / Registration
- Sign in / Login
- Forgot Password
- Reset Password
- User verification via Email OTP

## Routes
Basic information about the routes:

### Sign up / Registration
This routes serves the user a signup form & validates it before sending it to CORE service.
The form includes the following fields:

 - Full Name
 - Email Id
 - Password
 - Confirm Password
 - Buttons for Signup via Gmail & Facebook ( Passport JS )

### Sign in / Log in
This routes serves the user a login form & validates it before sending it to CORE service.
The form includes the following fields:

 - Email Id
 - Password
 - Buttons for Login via Gmail & Facebook ( Passport JS )

### Things to take care of
There are some cases which we need to handle:
- Code Level:
 - [ ] If a user directly tries to login via social media login method, s/he is allowed to do that & we redirect them to profile page.
 - [ ] The user should not be able to reset password more than 5 times in a day.
 - [ ] The user will not be able to login for next 15 minutes after 5 consecutive failed login attempts.
 - [ ] If things are getting repeated, try considering them to moving them into generic form and using them from a common location ( eg. common, utils, constants etc)
 - [ ] A function should do only & only one thing ( except a few places, if its validating something, it should validate only & not add userId or any other param to the body )  
- Project Level:
 - [ ] Read the config from .env file
 - [ ] Have a separate utils folder wherein all utils are present ( different project structures will use different location where utils will be found, for eg. inside src folder in react while in root folder in node )

Basic features & cases such as - strong password meter, sign up via same email id / phone number not allowed - are to covered along. 

