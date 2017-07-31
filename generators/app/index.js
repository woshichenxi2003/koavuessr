const path = require('path');
const chalk = require('chalk'); //不同颜色的info
const util = require('util');
const Generator = require('yeoman-generator');
const yosay = require('yosay'); //yeoman弹出框
module.exports = class extends Generator {
    info() {
        this.log(chalk.strikethrough(
            'I am going to build your app🏡'
        ));
    }
    constructor(args, opts) {
        super(args, opts);
        this.appname = "koa2vue2ssr";
    }
    paths() {
        this.sourceRoot();
    }
    install() { //安装依赖
        // this.installDependencies({
        //     skipInstall: this.options['skip-install']
        // });
    }
    writing() { // 按照自己的templates目录自定义
        // 拷贝目录
        const _path = this.appname;
        this.fs.copy(this.templatePath("src"), this.destinationPath(_path + "/src"));
        this.fs.copy(this.templatePath("build"), this.destinationPath(_path + "/build"));
        this.fs.copy(this.templatePath("test"), this.destinationPath(_path + "/test"));
        // 拷贝文件
        this.fs.copy(this.templatePath("package.json"), this.destinationPath(_path + "/package.json"));
        this.fs.copy(this.templatePath(".babelrc"), this.destinationPath(_path + "/.babelrc"));
        this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(_path + "/.eslintignore"));
        this.fs.copy(this.templatePath(".eslintrc.js"), this.destinationPath(_path + "/.eslintrc.js"));
        this.fs.copy(this.templatePath(".gitignore"), this.destinationPath(_path + "/.gitignore"));
        this.fs.copy(this.templatePath("index.html"), this.destinationPath(_path + "/index.html"));
        this.fs.copy(this.templatePath("server.js"), this.destinationPath(_path + "/server.js"));
        this.fs.copy(this.templatePath("README.md"), this.destinationPath(_path + "/README.md"));
        this.fs.copy(this.templatePath("yarn.lock"), this.destinationPath(_path + "/yarn.lock"));
    }
    end() {
        this.log(yosay(
            '构建成功☺!'
        ));
    }
};