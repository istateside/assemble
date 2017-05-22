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
