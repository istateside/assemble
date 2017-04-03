[![Build Status](https://travis-ci.org/lbaillie/assemble.svg?branch=master)](https://travis-ci.org/lbaillie/assemble) [![Code Climate](https://codeclimate.com/github/lbaillie/assemble/badges/gpa.svg)](https://codeclimate.com/github/lbaillie/assemble) [![Test Coverage](https://codeclimate.com/github/lbaillie/assemble/badges/coverage.svg)](https://codeclimate.com/github/lbaillie/assemble/coverage)

# Assemble

This app is not really a thing yet, but eventually will be a mobile app backed by [Assemble API](https://github.com/lizbaillie/assemble-api).

## Development

To run the app locally, fork and clone this repo and then also fork and clone the [Assemble API](https://github.com/lbaillie/assemble-api) in a separate directory.

Be sure you have [Yarn](https://yarnpkg.com/en/) installed on your machine. In this repo, run `yarn`. Then run `ember s` to run the server. In the API repo, run `rails setup` then `rails s` to run the server (you may also have to run `rails db:migrate` before running `rails s`, I can't remember).

When both servers are running, navigate to `localhost:4200`. You can log in with a fake user from the [API seed file](https://github.com/lbaillie/assemble-api/blob/master/db/seeds.rb). You can create a new user if you want, but I haven't added the ability to add new users to teams yet.

## MVP TODO

- [ ] Get location tracking/finding working
- [ ] Add ability to add a new user to a team
- [ ] Add profile page
- [ ] Add team pages
- [ ] Add push notification for phones
- [ ] Test on an actual phone
- [ ] Send out for styling
