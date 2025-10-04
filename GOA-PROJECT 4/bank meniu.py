def menu(user1):
    ID_LEN = 12
    balance = 1500 # მომხმარებლის ბალანსი 

    print(f"მოგესალმებათ საქართველოს ბანკი, ბატონო {user1}")
    your_ID = input("შეიყვანეთ თქვენი ID ნომერი: ")
    if len(your_ID) != ID_LEN:
        your_ID = input(f"პირადი ნომერი: {your_ID} არასწორია. კიდევ სცადეთ: ")
        if len(your_ID) != ID_LEN:
            print("მიუთითეთ სწორი პირადი ნომერი შემდეგ ჯერზე. გამოსვლა.")
            return

    print(f"პირადი ნომერი {your_ID} სწორია. შეგიძლიათ გააგრძელოთ.")    

    choice = 0
    while choice != 6:   # ლუპი გრძელდება სანამ 6 არ აირჩევ
        print("--- მენიუ ---")
        print("1. ბალანსის ნახვა")
        print("2. თანხის შეტანა")
        print("3. თანხის გატანა")
        print("4. ფულის გადარიცხვა")
        print("5. ისტორიის ნახვა")
        print("6. გასვლა")

        choice = int(input("აირჩიეთ მოქმედება (1-6): "))

        if choice == 1:
            print(f"თქვენს ბალანსზეა {balance}$")

        elif choice == 2:
            amount = int(input("რამდენის შეტანა გსურთ?: "))
            balance += amount
            print(f"დაირიცხა {amount}$. ახალი ბალანსი: {balance}$")

        elif choice == 3:
            amount = int(input("რამდენის გატანა გსურთ?: "))
            if amount > balance:
                print("არასაკმარისი თანხა ბალანსზე.")
            else:
                balance -= amount
                print(f"გაიტანეთ {amount}$. ახალი ბალანსი: {balance}$")

        elif choice == 4:
            recv_id = input("მიმღების ID: ")
            amount = int(input("რამდენის გადარიცხვა გსურთ?: "))
            if amount > balance:
                print("არასაკმარისი თანხა ბალანსზე.")
            else:
                balance -= amount
                print(f"{amount}$ გადაირიცხა {recv_id}-ზე. ახალი ბალანსი: {balance}$")

        elif choice == 5:
            print(f"ისტორია: ჩარიცხული 11,000$, დახარჯული 10,500$. მიმდინარე ბალანსი: {balance}$")

        elif choice == 6:
            print("თქვენი ტრანზაქციები დასრულდა. გისურვებთ წარმატებებს!")

        else:
            print("არასწორი არჩევანი, სცადეთ თავიდან.")

menu("ჯიმი")