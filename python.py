import json

with open('transfer.json', 'r') as x:
  transfer = json.load(x)

with open(transfer['Folder'] + '/options.json', 'r') as f:
  options = json.load(f)

if options['PythonLoading'] == True:
    print('Python was loaded.')