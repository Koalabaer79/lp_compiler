# Landing Page Compiler from Lars Urban

### Pug
For easy programming this compiler uses pug files

### Sass
This compiler uses SASS stylesheets to enable functions and variables for layouting

### Gulp
With the gulpfile.js it is possible to create new projects, watch and compile pug files

### nodeJS
To export your projects this compiler uses nodeJS to create inline html files with all style and js included

### Templates
Use your own templates to use them for new projects

## Commands

### Getting Started with
- <b>npm install</b><br/>
<i>To ensure that you have all neccessary tools</i>

### Gulp Commands
- <b>gulp new --project test1</b><br/>
<i>Create new Project with _default template</i>

- <b>gulp new --project test1 --template xyz</b><br/>
<i>Create new Project with defined template (name of folder) in template folder</i>

- <b>gulp watch</b><br/>
<i>Compiling your files into the "_dist" folder and watch "index.html" life in browser</i>

- <b>gulp watch --file xyz</b><br/>
<i>Compiling all files from project into the "_dist" folder and watch "xyz.html" - <span style="color:red;">full path of html file required</style></i>