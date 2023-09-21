"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function parseMarkdownFile(fileName, fileContent) {
    var match = fileContent.match(/---([\s\S]*?)---([\s\S]*)/);
    if (!match) {
        throw Error("Can't read frontmatter of ".concat(fileName));
    }
    var frontmatter = match[1];
    var body = match[2].trim();
    var titleMatch = frontmatter.match(/title:\s+(.+)/);
    var dateMatch = frontmatter.match(/date:\s+(.+)/);
    if (!titleMatch || !dateMatch) {
        throw Error("Can't read frontmatter of ".concat(fileName));
    }
    var title = titleMatch[1].trim();
    var dateString = dateMatch[1].trim();
    var date = Date.parse(dateString);
    if (isNaN(date)) {
        throw Error("Can't read frontmatter of ".concat(fileName));
    }
    return {
        title: title,
        date: date,
        body: body,
    };
}
function readMarkdownFiles(directoryPath) {
    var files = fs.readdirSync(directoryPath);
    var fileContents = [];
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var fileName = files_1[_i];
        var filePath = path.join(directoryPath, fileName);
        var fileContent = fs.readFileSync(filePath, 'utf-8');
        fileContents.push(parseMarkdownFile(fileName, fileContent));
    }
    return fileContents;
}
var directoryPath = './src/lib/posts';
var blogPosts = readMarkdownFiles(directoryPath);
fs.writeFileSync('./src/lib/blogs.json', JSON.stringify(blogPosts));
