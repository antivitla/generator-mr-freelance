
# generator-mr-freelance [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Freelance project generator powered by mr-woodman&#39;s workflow ideas.

## Freelance project structure

As all projects usually reside in one folder in filesystem (i have `~/Projects/Freelace`) and maybe got archived somewhere else, it is convinient to have some information already in folder name. So first idea is:

#### **Date--Client--Project** pattern for folder name

It is `yyyy-mm--client-name--project-name`. Complex names through hyphen. So our projects got ordered first by year, then by month, then by client and finally by project name. This order is the most natural for me to review and find stuff.

Generator will ask client and project names. Spaces will be transformed to hyphens. Generator will ask confirmation to use current year and month. If not confirmed, will ask for them. So, given the name *"Vitaly Kuleshin"*, project *"Freelance generator"* and the fact we doing it in 2016 september, we'll recieve `2016-09--vitaly-kuleshin--freelance-generator` for project's folder name.

#### **Inbox->Workspace->Outbox** pattern for project materials

**Inbox** is target for all design materials, briefs, all kinds of stuff coming from outside world (clients, workmates) to you. Then they are to be used in **Workspace**, which is actually you working chaos. And then, in the end, when your work is done, you put it nicified & prettified into **Outbox**. But.

##### **Sources->Distributives** pattern for workspace files

But there is a catch. In web-development Workspace and Outbox is often combined and become something like **Dist** (Distributives) and **Src** (Sources) folders inside one folder. Which we usually want as git-repository. Sooo, with some other minor modifications we came up with the project structure below. Inbox = **incoming**, Workspace = **www**, and no Outbox.

```
└───2016-09--vitaly-kuleshin--awesome-website/
    ├───incoming/
    └───www/
        ├───.git/
        ├───dist/
        └───src/
```

This is core and this generator will not go further. But, in reality, all other front-end stuff will also appear: bower and node modules, gulp files, test files, readme, docs and so on. All this will go to root, as siblings of **src** and **dist** folders. At some point you will end up with something like this:

```
└───2016-09--vitaly-kuleshin--awesome-website/
    ├───.sublime-text/
    ├───incoming/
    └───www/
        ├───.git/
        └───frontend/
            ├───dist/
            ├───src/
            ├───node_modules/
            ├───bower_components/
            ├───gulp_scripts/
            ├───tests/
            ├───docs/
            ├───config/
            ├───any_other_dev_stuff/
            ├───readme.md
            ├───package.json
            ├───bower.json
            ├───gulpfile.js
            └───.gitignore
```

And this is ok :)) I personally some time ago struggled against this structure as too big and... overhelming. But actually it is the best we can do. It is popular and de-facto standard of code-organizing, not only web-projects. The key is to understand the secret: **src** vs **dist** are main guys here. `Readme.md` will (in most cases) tell you more. And that's it.

#### Assets structure in **Dist** (css/js/img or styles/scripts/images?)

Here we step into actual web-land. And you are the master here. But, though folder names can vary, my main idea is to stay oldschool and have folder for each asset type:

```
├───dist/
│   ├───**demos**/
│   ├───fonts/
│   ├───images/
│   ├───maps/
│   ├───scripts/
│   └───styles/
```

#### Demos (markup preview pages)

Note **Demos** folder. If project is not single page application, we often have backend-coders who convert our demo markup to their php/python templates. That is why it is very convinient for them coders to have my markup demo pages somewhere near and online to check with them periodically. But, we don't want to mess up production asset folder too much, so take you time to configure your build tools to create demo pages inside sibling folder **Demo**.

Wait, what about paths?!  Yes, you are right, this is a problem. We can, of course, set all paths from the root with "/". But i don't like it because sometimes my **Dist** markup i want to place in my portfolio, somewhere not in the root. So i need relative paths. And so, you will have to clone styles with corrected paths, just for demo. Yes, it is somehow wrecked and hacky thing, but i don't know better way to keep assets with demo pages easy portable.


* * *

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mr-freelance using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mr-freelance
```

Then generate your new project:

```bash
yo mr-freelance
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

unlicense © [Виталий Кулешин](http://mr-woodman.ru)


[npm-image]: https://badge.fury.io/js/generator-mr-freelance.svg
[npm-url]: https://npmjs.org/package/generator-mr-freelance
[daviddm-image]: https://david-dm.org/antivitla/generator-mr-freelance.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/antivitla/generator-mr-freelance
[coveralls-image]: https://coveralls.io/repos/antivitla/generator-mr-freelance/badge.svg
[coveralls-url]: https://coveralls.io/r/antivitla/generator-mr-freelance

> Written with [StackEdit](https://stackedit.io/).
