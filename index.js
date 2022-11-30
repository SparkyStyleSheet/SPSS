// TODO - Fix the comments bugs
// TODO - Fix the plugins
// TODO - Add more possibilities in english
// TODO - Dynamic logs
// TODO - Work on the Javascript import (You will be able to use document.style and everything like that.)

// Imports
var fs = require('fs');
var {resolve} = require('path');
var path = require('path');

fs.readFile('transfer.json', 'utf8', function(err, transfer) {

    var optionsFolder = JSON.parse(transfer);

    // Starting variables
    var indexPath = resolve('./index.js');
    var logsFile = `${optionsFolder.Folder}/logs.txt`;

    // Functions
    function newLine(string) {
        fs.appendFileSync(`${logsFile}`, '\n' + string + '\n');
    }
    function connect(file) {
        require(`${file}`);
    }
    function log(string) {
        console.log(string);
    }
    function createNewFile(file, data) {
        fs.writeFileSync(file, data);
    }

    // Starting variables
    var optionsPath = indexPath.replace('index.js', `${optionsFolder.Folder}\\options.json`);
    var jsonFile = optionsPath;
    var readingWay = 'utf8';

    // Reading Options File
    fs.readFile(`${jsonFile}`, `${readingWay}`, function(err, json) {

        // parsing JSON and adding Comments
        var json2 = json.replace(/^.*##.*$/mg, "");
        var mC = JSON.parse(json2);

        // Folder / Multiple file at the time
        folder = './CODE/Scripts'
        const directoryPath = path.join(__dirname, folder);
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                fs.readFile(`./CODE/Scripts/${file}`, `${readingWay}`, function(err, data) {

                        // SECTION | Main
                        var data2 = data.replaceAll('=', ':');
                        var data2 = data2.replaceAll('->', 'after');
                        var data2 = data2.replaceAll('<-', 'before');
                        var data2 = data2.replaceAll('>-', 'after');
                        var data2 = data2.replaceAll('-<', 'before');
                        var data2 = data2.replaceAll('<#', '/*');
                        var data2 = data2.replaceAll('#>', '*/');
                        var data2 = data2.replaceAll('|,', ';');
                        var data2 = data2.replaceAll('+++', '~');
                        var data2 = data2.replaceAll('++', '+');
                        var data2 = data2.replaceAll('_+', '>');
                        var data2 = data2.replaceAll('variable(', 'var(');
                        var data2 = data2.replaceAll('maximum(', 'max(');
                        var data2 = data2.replaceAll('calculate(', 'calc(');
                        var data2 = data2.replaceAll('minimum(', 'min(');
                        var data2 = data2.replaceAll('set(', 'var(');
                        var data2 = data2.replaceAll('$(--', 'var(--');

                        // Options
                        if (data.includes(`options:`)) {
                            var data2 = data2.replace(`options:`, ':root');
                        } else if (data.includes(`:options`)) {
                            var data2 = data2.replace(`:options`, ':root');
                        } else if (data.includes(`option:`)) {
                            var data2 = data2.replace(`option:`, ':root');
                        } else if (data.includes(`:option`)) {
                            var data2 = data2.replace(`:option`, ':root');
                        } else if (data.includes(`opt:`)) {
                            var data2 = data2.replace(`opt:`, ':root');
                        } else if (data.includes(`:opt`)) {
                            var data2 = data2.replace(`:opt`, ':root');
                        }
                        // Media
                        var data2 = data2.replaceAll('media', '@media');

                    // SECTION | clearlogs
                    var clog = 'clearlogs';
                    if (data.includes(`import: ${clog}`)) {
                        if (data.includes(`import: ${clog};`)) {
                            var data2 = data2.replace(`import: ${clog};`, '');
                        } else if (data.includes(`import: ${clog}`)) {
                            var data2 = data2.replace(`import: ${clog}`, '');
                        }
                        fs.writeFile('./Options/logs.txt', '', function(err) {});
                    }

                    // For the plugins
                    folder2 = './Plugins'
                    const directoryPath = path.join(__dirname, folder2);
                    fs.readdir(directoryPath, function (err, files) {
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        files.forEach(function (file) {
                            connect(`./Plugins/${file}`);
                            newLine('Connected the plugins.');
                        }
                    )})

                    // SECTION | comments
                    var comments1 = 'comments';
                    if (data.includes(`import: ${comments1}`)) {
                        if (data.includes(`import: ${comments1};`)) {
                            var data2 = data2.replace(`import: ${comments1};`, '');
                        } else if (data.includes(`import: ${comments1}`)) {
                            var data2 = data2.replace(`import: ${comments1}`, '');
                        }
                        var data2 = data2.replace(/^.*##.*$/mg, "");
                        newLine('Imported comments.');
                    }

                    // SECTION | oneline
                    var line1 = 'oneline';
                    if (data.includes(`import: ${line1}`)) {
                        if (data.includes(`import: ${line1};`)) {
                            var data2 = data2.replace(`import: ${line1};`, '');
                        } else if (data.includes(`import: ${line1}`)) {
                            var data2 = data2.replace(`import: ${line1}`, '');
                        }
                        var data2 = data2.replace(/[\r\n]/gm, '');
                        newLine('Imported oneline.');
                    }

                    // SECTION | shortcut
                    var import2 = 'shortcut';
                    if (data.includes(`import: ${import2}`)) {
                        if (data.includes(`import: ${import2};`)) {
                            var data2 = data2.replace(`import: ${import2};`, '');
                        } else if (data.includes(`import: ${import2}`)) {
                            var data2 = data2.replace(`import: ${import2}`, '');
                        }
                        if (data.includes('bgi')) {
                            var data2 = data2.replaceAll('bgi', 'background-image');
                        } else if (data.includes('bgc')) {
                            var data2 = data2.replaceAll('bgc', 'background-color');
                        } else if (data.include('bg')) {
                            var data2 = data2.replaceAll('bg', 'background');
                        }
                        var data2 = data2.replaceAll('wdt', 'width');
                        var data2 = data2.replaceAll('hgt', 'height');
                        var data2 = data2.replaceAll('line-grad', 'linear-gradient');
                        var data2 = data2.replaceAll('mg', 'margin');
                        var data2 = data2.replaceAll('mgt', 'margin-top');
                        var data2 = data2.replaceAll('mgb', 'margin-bottom');
                        var data2 = data2.replaceAll('mgl', 'margin-left');
                        var data2 = data2.replaceAll('mgr', 'margin-right');
                        var data2 = data2.replaceAll('brd', 'border');
                        var data2 = data2.replaceAll('brr', 'border-radius');
                        var data2 = data2.replaceAll('degre', 'deg');
                        var data2 = data2.replaceAll("pad", 'padding');
                        var data2 = data2.replaceAll("clr", 'color');
                        var data2 = data2.replaceAll("crsr", 'cursor');
                        newLine('Imported shortcut.');
                    }

                    // SECTION | english
                    var import3 = 'english';
                    if (data.includes(`import: ${import3}`)) {
                        if (data.includes(`import: ${import3};`)) {
                            var data2 = data2.replace(`import: ${import3};`, '');
                        } else if (data.includes(`import: ${import3}`)) {
                            var data2 = data2.replace(`import: ${import3}`, '');
                        }

                        // Class
                        var class1 = 'class';
                        if (data.includes(`get the ${class1} `)) {
                            var data2 = data2.replaceAll(`get the ${class1} `, '.');
                        }
                        if (data.includes(`take the ${class1} `)) {
                            var data2 = data2.replaceAll(`take the ${class1} `, '.');
                        }
                        if (data.includes(`the ${class1} `)) {
                            var data2 = data2.replaceAll(`the ${class1} `, '.');
                        }

                        // Tags
                        var tags1 = 'tags';
                        var tag1 = 'tag';
                        if (data.includes(`get the ${tags1} `)) {
                            var data2 = data2.replaceAll(`get the ${tags1} `, '');
                        }
                        if (data.includes(`take the ${tags1} `)) {
                            var data2 = data2.replaceAll(`take the ${tags1} `, '');
                        }
                        if (data.includes(`take the ${tag1} `)) {
                            var data2 = data2.replaceAll(`take the ${tag1} `, '');
                        }
                        if (data.includes(`the ${tags1} `)) {
                            var data2 = data2.replaceAll(`the ${tags1} `, '');
                        }
                        if (data.includes(`get the ${tag1} `)) {
                            var data2 = data2.replaceAll(`get the ${tag1} `, '');
                        }
                        if (data.includes(`the ${tag1} `)) {
                            var data2 = data2.replaceAll(`the ${tag1} `, '');
                        }

                        // id
                        var id1 = 'id';
                        if (data.includes(`get the ${id1} `)) {
                            var data2 = data2.replaceAll(`get the ${id1} `, '#');
                        }
                        if (data.includes(`take the ${id1} `)) {
                            var data2 = data2.replaceAll(`take the ${id1} `, '#');
                        }
                        if (data.includes(`the ${id1} `)) {
                            var data2 = data2.replaceAll(`the ${id1} `, '#');
                        }

                        // All elements
                        var allTheElements = 'all the elements';
                        var data2 = data2.replaceAll(`get ${allTheElements} `, '*');
                        var data2 = data2.replaceAll(`take ${allTheElements} `, '*');
            
                        // Setting
                        var data2 = data2.replaceAll("set the ", '');
                        var data2 = data2.replaceAll("put the ", '');
                        var data2 = data2.replaceAll("turn the ", '');
                        var data2 = data2.replaceAll("make the ", '');
                        var data2 = data2.replaceAll("set his ", '');

                        var data2 = data2.replaceAll(' is ', ':');
                        var data2 = data2.replaceAll(' to ', ':');
                        var data2 = data2.replaceAll("'s direct children ", ' > ');
                        var data2 = data2.replaceAll("'s first children ", ' + ');
                        var data2 = data2.replaceAll("'s children that's after the first ", ' ~ ');
                        var data2 = data2.replaceAll("'s children that comes after the first ", ' ~ ');
                        var data2 = data2.replaceAll("'s options", ':root');
                        var data2 = data2.replaceAll("'s empty children", ':empty');
                        var data2 = data2.replaceAll("'s enabled elements", ':enable');
                        var data2 = data2.replaceAll("'s all unvisited links", ':link');
                        var data2 = data2.replaceAll("'s language", ':lang');
                        var data2 = data2.replaceAll("'s all visited links", ':visited');

                        // Getting Variables
                        var data2 = data2.replaceAll("get the property ", '');
                        var data2 = data2.replaceAll("take the property ", '');
                        var data2 = data2.replaceAll("get the option ", '');
                        var data2 = data2.replaceAll("take the option ", '');
                        var data2 = data2.replaceAll("get the variable ", '');
                        var data2 = data2.replaceAll("take the variable ", '');

                        var data2 = data2.replaceAll("and set it", '');
                        var data2 = data2.replaceAll("then set it", '');
                        var data2 = data2.replaceAll("the ", '');
                        newLine('Imported english.');
                    }

                    // Generating The CSS File
                    file2 = file.split('.')[0]
                    fs.writeFile(`./CODE/Generated/${file2}.css`, data2, function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            if (mC.GeneratedLogs === true) {
                                newLine('Successfully generated the CSS.\nYou can now use it for your code.');
                            }
                        }
                    });
                });
            });
        });
    });
});