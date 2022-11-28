// TODO - Fix the comments bugs
// TODO - Fix the plugins
// TODO - Add more possibilities in english
// TODO - Dynamic logs

// Imports
var fs = require('fs');
var {resolve} = require('path');

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

        //requiring path and fs modules
        const path = require('path');

        folder = './CODE/Scripts'
        //joining path of directory 
        const directoryPath = path.join(__dirname, folder);
        //passsing directoryPath and callback function
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                console.log(file); 
        
        // Reading The SPSS Code
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
                var data2 = data2.replaceAll('*(--', 'var(--');

                // Options
                if (data.includes(`options:`)) {
                    var data2 = data2.replace(`options:`, ':root');
                } else if (data.includes(`:options`)) {
                    var data2 = data2.replace(`:options`, ':root');
                } else if (data.includes(`option:`)) {
                    var data2 = data2.replace(`option:`, ':root');
                } else if (data.includes(`:option`)) {
                    var data2 = data2.replace(`:option`, ':root');
                } else if (data.includes(`options`)) {
                    var data2 = data2.replace(`options`, ':root');
                } else if (data.includes(`option`)) {
                    var data2 = data2.replace(`option`, ':root');
                }

                // Media
                var data2 = data2.replaceAll('media', '@media');

            // For the plugins
            connect(`./plugins/${mC.PluginFileName}.js`);

            // SECTION | comments
            var comments1 = 'comments';
            if (data.includes(`import: ${comments1}`)) {
                if (data.includes(`import: ${comments1};`)) {
                    var data2 = data2.replace(`import: ${comments1};`, '');
                } else if (data.includes(`import: ${comments1}`)) {
                    var data2 = data2.replace(`import: ${comments1}`, '');
                }
                var data2 = data2.replace(/^.*##.*$/mg, "");
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
            }

            // SECTION | shortcut
            var import2 = 'shortcut';
            if (data.includes(`import: ${import2}`)) {
                if (data.includes(`import: ${import2};`)) {
                    var data2 = data2.replace(`import: ${import2};`, '');
                } else if (data.includes(`import: ${import2}`)) {
                    var data2 = data2.replace(`import: ${import2}`, '');
                }
                var data2 = data2.replaceAll('wdt', 'width');
                var data2 = data2.replaceAll('hgt', 'height');
                var data2 = data2.replaceAll('line-grad', 'linear-gradient');
                var data2 = data2.replaceAll('bkc', 'background-color');
                var data2 = data2.replaceAll('bki', 'background-image');
                var data2 = data2.replaceAll('bg', 'background');
                var data2 = data2.replaceAll('mg', 'margin');
                var data2 = data2.replaceAll('mgt', 'margin-top');
                var data2 = data2.replaceAll('mgb', 'margin-bottom');
                var data2 = data2.replaceAll('mgl', 'margin-left');
                var data2 = data2.replaceAll('mgr', 'margin-right');
                var data2 = data2.replaceAll('brd', 'border');
                var data2 = data2.replaceAll('brr', 'border-radius');
                var data2 = data2.replaceAll('degre', 'deg');
                var data2 = data2.replaceAll("pad", 'padding');
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