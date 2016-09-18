# generator-mr-freelance [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Freelance project generator according to mr-woodman&#39;s workflow ideas.

## Freelance project structure

As all projects usually reside in one folder in filesystem (i have ~/Projects/Freelace) and maybe got archived somewhere else, it is convinient to have some information already in folder name. So first idea is:

#### Date-Client-Project pattern for folder name

It is **"yyyy-mm--client-name--project-name"**. Complex names through hyphen. So our projects got ordered first by year, then by month, then by client and finally by project name. This order is the most natural for me to review and find stuff.

Generator will ask client and project names. Spaces will be transformed to hyphens. Generator will ask confirmation to use current year and month. If not confirmed, will ask for them. So, given the name *"Vitaly Kuleshin"*, project *"Freelance generator"* and the fact we doing it in 2016 september, we recieve **"2016-09--vitaly-kuleshin--freelance-generator"** project name.

#### Inbox->Workspace->Outbox pattern for project materials

**Inbox** is target for all design materials, briefs, all kinds of stuff coming from outside world (clients, workmates) to you. To be used in **Workspace**, which is actually you working chaos. At last, when your work is done, you put it nicified & prettified into **Outbox**. 

##### Incoming->www(src->dist) pattern

But. In web-development Workspace and Outbox is often combined and become something like **Dist** and **Src** folders inside one folder. Which we usually convert to git-repository. So, with some minor modifications we came up with the project structure below. Inbox = **incoming**, Workspace = **www**, and no Outbox. 

```
└───2016-09--vitaly-kuleshin--awesome-website/
    ├───incoming/
    └───www/
        ├───.git/
        ├───dist/
        └───src/
```

##### Further modifications of incoming->www(src->dist) pattern

Some backenders and frontenders out their code in different repositories, others in one. In my experience i wanted to have structure that is easy standalone and easy to mix with backender's repository. Meet wrapping folder **frontend**. Also i put a readme.md about frontend environment installation instructions for other coders that intend to modify my code.

```
└───2016-09--vitaly-kuleshin--awesome-website/
    ├───incoming/
    └───www/
        ├───.git/
        └───frontend/
            ├───dist/
            ├───src/
            └───readme.md
```

Gulpfile.js, node and bower modules and stuff will go here. Note that **Dist** folder can be moved outside **Frontend**. This is done for backend-with-frontend repositories. We can configure our build tool to build directly to where our backend-coder wants our builded assets.

Given Sublime Text project files, Node and Bower modules, Grunt and Testing stuff, at the end we can come up with something like this:

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

#### Assets structure in **Dist** (css/js/img vs styles/scripts/images)

I suggest:

```
├───dist/
│   ├───**demos**/
│   ├───fonts/
│   ├───images/
│   ├───maps/
│   ├───scripts/
│   └───styles/
```

Note **Demos** folder. If project is not SPA, we often have backend-coders who convert our demo markup to their php/python templates. Thus it is very convinient for them coders to have my markup demo pages somewhere online to check with them periodically. But, we don't want to mess up production too much (NOT IN THE ROOT!), so take you time to configure your build tools (gulp?) to create demo pages inside sibling folder **Demo**. 

Wait, what? Paths? Exactly. We can, of course, set all paths from the root with "/". But i don't like it because sometimes my **Dist** markup i want to place in my portpholio, somewhere no in the root. So i need relative paths. And so, you will have to clone styles with corrected paths, just for demo. It is little wrecked and hacky thing, but i don't know better way to keep assets with demo pages easy portable anywhere.


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