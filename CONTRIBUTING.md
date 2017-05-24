# Contributing to Assemble

## Some tissues for your issues

We almost always have some [issues](https://github.com/lbaillie/assemble/issues) you can choose from. Assemble is still under active development, so almost every issue right now is related to getting Assemble into a state where it can be deployed and beta tested by real users.

Issues marked "E - Easy" are best reserved for people who are either just getting started with contributing to open source, are somewhat intimidated by the prospect of contributing to a stranger's project and want to start simple, or just don't have much/any context about the project yet but want to get involved and don't know where to start.

Other issues may be more involved, or might not have a whole lot of detail. I am happy to provide context or details on anything as needed. Some issues may require changes on our [Rails API](https://github.com/lbaillie/assemble-api) as well.

It's okay if you want to claim an issue but need a little guidance! Feel free to comment on any issue to ask questions before claiming an issue as your own. If that forum is a little too public, you can also [DM me on Twitter](https://twitter.com/_lbaillie). I usually answer within 1-3 days (longest I think has been a week, when I'm traveling). You can also ping me on [Ember Community Slack](https://ember-community-slackin.herokuapp.com/) - my username is `lizbaillie`.

If you don't see an issue that works for you, but you have a specific idea (or just want to help and don't know how), just DM me on Twitter or ping me on Ember Slack (see above). I am always open to any kind of help I can get!

## Stake your claim

If you see an issue you are interested in, just comment there to express your interest and the issue is yours (if you want it). Feel free to ask questions on the issue itself - I promise I won't judge you so don't be shy! Once you've claimed your issue, get started on your first PR!

## Your first PR

If you have never contributed to an open source project before - greetings! I am so happy to have you here. Here is your step-by-step guide! If you don't really know how to use Git yet (i.e. you're not sure how to make a commit), check out [this tutorial](https://www.sitepoint.com/git-for-beginners/), mostly on how to use `git add`, `git commit`, and `git push`.

1. Fork this repository: in the upper right hand corner of the screen, you'll see a button that says "Fork." Click it! This will make a copy of this repo in your own directory (i.e. `yourgithubname/assemble`).
1. Clone the fork somewhere on your own computer. On the main page of this repository you'll see a big green button that says "Clone or download." Click it! A copyable link will be displayed. Copy it! Go into your own terminal and figure out where you want this repo to live, then enter `git clone git@github.com:<putyourgithubnamehere>/assemble.git`. This will download a copy of your fork onto your computer.
1. Open up the forked copy in whatever text editor you like to use and make your changes! Try to make sure all your commits are discrete units of work whenever possible. If you're in doubt, it's better to make more commits than fewer, because you can always [squash](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history) them later (I may ask you to squash commits before I merge your PR).
1. After you push up the changes to your fork, go back to [the main repo](https://github.com/lbaillie/assemble/pulls) and click "New pull request." "Base" should remain `master` and "Compare" should point to your fork. Click "Create pull request," add a descriptive subject heading, and include as much detail as possible in your PR description that I might need. Include the issue number in your PR description (i.e. "Fixes #9"). If there is a corresponding change on the Rails API, include a link to that PR as well.
1. Did you add a test? Can you add a test? Before submitting any PR always think if there's a test you can add for whatever change you made. There might not be, but if there is, you should add it. If you think a test could be added but don't know where to start, just ask! I can help.
1. After the PR is made, if I don't comment or merge it within a week, ping me! GitHub does not always notify me about these things so it's totally possible that I have no idea the PR even exists.
1. Bask in the glory of your first PR! Yay, you did it!

## Any other questions?

As I mentioned before, I am highly pingable! You can [DM me on Twitter](https://twitter.com/_lbaillie). I usually answer within 1-3 days (longest I think has been a week, when I'm traveling). You can also ping me on [Ember Community Slack](https://ember-community-slackin.herokuapp.com/) - my username is `lizbaillie`.
