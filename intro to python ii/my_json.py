import json
my_list = []
with open('file.dat') as file_object:
  my_list = json.loads(file_object.read())

user_input = ''
while user_input != 'q':
  my_list.append((user_input))
  user_input = input('give me the next part')
# append to file.dat with new line
with open('file.dat', 'w') as file_object:
  json.dump(my_list, file_object)
  # newline
  file_object.write('\n')

  

