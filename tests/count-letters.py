import json

# Initialize the count dictionary
count = {"n": 0, "o": 0, "a": 0, "k": 0, "i": 0, "r": 0, "e": 0, "l": 0}

# Open the input file and read line by line
filename = 'app/riddle-1/riddle-file.txt'
with open(filename, 'r') as file:
    for line in file:
        for char in line.strip():  # Remove the newline character at the end of the line
            if char in count:
                count[char] += 1  # Increment the count of the character

# Concatenate the counts to form the passcode
passcode = ''.join(str(count[char]) for char in count)

# Print the count dictionary and the passcode
print(count)
print('The passcode is:', passcode)

# Save the count dictionary and the passcode to a JSON file
with open('result.json', 'w') as file:
    json.dump({'count': count, 'passcode': passcode}, file)
