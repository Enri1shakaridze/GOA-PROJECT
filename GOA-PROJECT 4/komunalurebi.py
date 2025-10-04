def komunaluri_gadasaxadebi():
    print("კომუნალურების გადახდის სისტემა")
    print("აირჩიე გადასახადი:")
    print("1. ელექტროენერგია")
    print("2. გაზი")
    print("3. წყალი")
    print("4. ინტერნეტი")

    archevani = input("გადასახადის ასარჩევად შეიყვანე ნომერი (1-4): ")

    if archevani == "1":
        komunaluri = "ელექტროენერგია"
    elif archevani == "2":
        komunaluri = "გაზი"
    elif archevani == "3":
        komunaluri = "წყალი"
    elif archevani == "4":
        komunaluri = "ინტერნეტი"
    else:
        print("არასწორი არჩევანი!")
        return

    tanxa = input(f"შეიყვანე თანხა {komunaluri}-ისთვის: ")

    print(f"თქვენ წარმატებით გადაიხადეთ {komunaluri} {tanxa} ₾")


komunaluri_gadasaxadebi()