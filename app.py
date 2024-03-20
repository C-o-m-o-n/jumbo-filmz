counter = 0

while counter < 10:

    max_height = int(input("Enter a number: "))

    if max_height < 0:
        print("Please enter a positive number")
    elif max_height > 8:
        print("Please enter number 8 or lower")
    else:
        print(f"You entered number {max_height}")
        break

    counter += 1

