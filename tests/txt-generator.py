import random

length = 50  # Length of each string
rows = 50  # Number of rows

for _ in range(rows):
    random_string = ''.join(random.choice('sharon') for _ in range(length))
    print(random_string)