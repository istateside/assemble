[![Build Status](https://travis-ci.org/lbaillie/assemble.svg?branch=master)](https://travis-ci.org/lbaillie/assemble) [![Code Climate](https://codeclimate.com/github/lbaillie/assemble/badges/gpa.svg)](https://codeclimate.com/github/lbaillie/assemble) [![Test Coverage](https://codeclimate.com/github/lbaillie/assemble/badges/coverage.svg)](https://codeclimate.com/github/lbaillie/assemble/coverage)

# Assemble

This app is not really a thing yet, but eventually will be a mobile app backed by [Assemble API](https://github.com/lizbaillie/assemble-api).

## What is this thing?

You can see a loose mockup of the eventual functionality [here](https://marvelapp.com/10228i9/screen/15246106). This should give you some idea of what it is and how it will work. The design is NOT final by any means. I just wanted to give people a quick idea of what the app does and how it will eventually work.

The idea is that if you are in a situation where you feel unsafe, but maybe not enough to call the police, you can quickly summon people from a pre-determined group of people. Those people will receive an alert on their phone letting them know your location on Google Maps, which they can respond to in order to say whether they can come to where you are. You will then be notified about who is on their way and possibly how far away they are.

## Want to contribute?

Check out our CONTRIBUTING.md file - beginners very welcome!

## Development

To run the app locally, fork and clone this repo and then also fork and clone the [Assemble API](https://github.com/lbaillie/assemble-api) in a separate directory.

Be sure you have [Yarn](https://yarnpkg.com/en/) installed on your machine. In this repo, run `yarn`. Then run `ember s` to run the server. In the API repo, run `rails setup` then `rails s` to run the server (you may also have to run `rails db:migrate` before running `rails s`, I can't remember).

When both servers are running, navigate to `localhost:4200`. You can log in with a fake user from the [API seed file](https://github.com/lbaillie/assemble-api/blob/master/db/seeds.rb). You can create a new user if you want, but I haven't added the ability to add new users to teams yet.

## MVP TODO

- [ ] Get location tracking/finding working
- [ ] Add ability to add a new user to a team
- [ ] Add team pages
- [ ] Add push notification for phones
- [ ] Test on an actual phone
- [ ] Send out for styling

MIT License

Copyright (c) 2016 Elizabeth Baillie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
