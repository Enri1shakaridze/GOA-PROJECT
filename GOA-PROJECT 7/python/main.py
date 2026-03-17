format_lari = lambda x: f"₾{x:,.2f}"
format_dollar = lambda x: f"${x:,.2f}"
is_positive = lambda x: x > 0
is_senior = lambda age: age >= 65

class Bank:
    LOGO = "🏦 GeoBank"
    DOLLAR_RATE = 2.65
    PENSION_BONUS = 200.0
    MAX_LOAN = 10000.0

    def __init__(self):
        self.user_db = {}
        self._loged_in = None

# ენრი შაქარიძე
    def signup(self, username, name, Id, password, age):
        if username in self.user_db:
            print("სახელი უკვე დაკავებულია!")
            return 
        if len(str(password)) < 4:
            print("პაროლი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს!")
            return

        self.user_db[username] = {
            'name': name,
            'age': age,
            'password': password,
            'balance': 0.0,
            'loan': 0.0,
            'tranzactions': [],
            'id': Id,
        }

        if is_senior(age):
            self.user_db[username]['balance'] += self.PENSION_BONUS
            print(f'65+ ბონუსი! {format_lari(self.PENSION_BONUS)} დაემატა ანგარიშზე.')
        
        print(f"{name}, კეთილი იყოს თქვენი მობრძანება {self.LOGO}-ში!")
        return
# ენრი შაქარიძე
    def login(self, username, password):
        if username not in self.user_db:
            print("მომხმარებელი ვერ მოიძებნა! გთხოვთ დარეგისტრირდეთ.")
            return

        if self.user_db[username]["password"] != password:
            print("არასწორი პაროლი!")
            return

        self._loged_in = username
        name = self.user_db[username]["name"]
        print(f"კეთილი იყოს, {name}! ({self.LOGO})")
        return

# ონისე ბილიხოძე
    def check_balance(self):
        user = self.user_db[self._loged_in]
        bal = user["balance"]

        print("━━ თქვენი ბალანსი ━━")
        print(f"ლარში: {format_lari(bal)}")
        print(f"დოლარში: {format_dollar(bal / self.DOLLAR_RATE)}")

# ონისე ბილიხოძე
    def withdraw(self, amount, currency="lari"):
        user = self.user_db[self._loged_in]

        if amount <= 0:
            print("თანხა უნდა იყოს დადებითი!")
            return

        if currency == "dollar":
            amount = amount * self.DOLLAR_RATE

        if user["balance"] < amount:
            print("ანგარიშზე არასაკმარისი თანხაა!")
            return

        user["balance"] -= amount
        user["tranzactions"].append(f"Withdraw: {format_lari(amount)}")

        print(f"თქვენ გაიტანეთ {format_lari(amount)}")

# ლუკა გველუკაშვილი
    def loan(self, amount):
        if amount > self.MAX_LOAN:
            print("ძალიან ბევრია!")
            return
        else:
            self.user_db[self._loged_in]['loan'] += amount
            self.user_db[self._loged_in]['balance'] += amount
            print("სესხი გაიცემა!")

# ლუკა გველუკაშვილი
    def transfer(self,username, amount):
        if username not in self.user_db:
            print('ესეთი მომხმარებელი არ არსებობს!')
            return
        if amount > self.user_db[self._loged_in]['balance']:
            print("ბალანსზე არ გაქვთ საკმარისი ფული!")
        else:
            self.user_db[self._loged_in]['balance'] = self.user_db[self._loged_in]['balance'] - amount
            print(f"გადაირიცხა: {amount}")

# ონისე ბილიხოძე
    def deposit(self, amount, currency="lari"):
        user = self.user_db[self._loged_in]

        if amount <= 0:
            print("თანხა უნდა იყოს დადებითი!")
            return

        if currency == "dollar":
            amount = amount * self.DOLLAR_RATE

        user["balance"] += amount
        user["tranzactions"].append(f"Deposit: {format_lari(amount)}")

        print(f"ანგარიშზე დაემატა {format_lari(amount)}")

# ლუკა გველუკაშვილი
    def pay_loan(self, amount):
        if self.user_db[self._loged_in]['loan'] <= 0:
            print("თქვენ სესხი არ გაქვთ!")
        else:
            if amount > self.user_db[self._loged_in]['balance']:
                print("ბალანსზე მაგდენი ფული არ გაქვთ!")
            else:
                self.user_db[self._loged_in]['balance'] -= amount
                self.user_db[self._loged_in]['loan'] -= amount
                print("სესხი გადახდილია!")

# ენრი შაქარიძე
    def history(self):
        hs = self.user_db[self._loged_in]
        print(hs['tranzactions'])

# ლუკა გველუკაშვილი
    def freeze_account(self):
        del self.user_db[self._loged_in]
        self._loged_in = None
        print('აქაუნთი გაუქმებულია!')
    
# ენრი შაქარიძე
    def run(self):
        print('')
        print(f"{'═'*52}")
        print(f"{self.LOGO}  —  კეთილი იყოს თქვენი მობრძანება!")
        print(f"{'═'*52}")

        while True:
            if not self._loged_in:
                print('')
                print("1. შესვლა  (Login)")
                print("2. რეგისტრაცია  (Signup)")
                print("0. გასვლა")
                c = input('=> ').strip()
        
                if c == "1":
                    u = input("მომხმარებელი: ").strip()
                    p = input("პაროლი: ").strip()
                    self.login(u, p)

                elif c == "2":
                    u   = input("მომხმარებელი: ").strip()
                    p   = input("პაროლი: ").strip()
                    fn  = input("სახელი გვარი: ").strip()
                    age = int(input("ასაკი: ").strip())
                    i = int(input('შეიყვანე შენი პირადი ნომერი: '))
                    self.signup(u, fn, i, p, age)

                elif c == "0":
                    print("ნახვამდის!")
                    break

            else:
                print('')
                print(f"━━ მენიუ ━━")
                print("1.  შეტანა  (Deposit)")
                print("2.  გამოტანა ლარში  (Withdraw GEL)")
                print("3.  გამოტანა დოლარში  (Withdraw USD)")
                print("4.  ბალანსი  (Check Balance)")
                print("5.  გადარიცხვა  (Transfer)")
                print("6.  სესხის აღება  (Loan)")
                print("7.  სესხის გადახდა  (Pay Loan)")
                print("8.  ისტორია  (History)")
                print("9.  ანგარიშის გაყინვა/გაუქმება")
                print("0.  გასვლა  (Logout)")
                a = input("=> ").strip()
    
                if a == "1":
                    amt = float(input("თანხა (₾): ").strip())
                    self.deposit(amt)
    
                elif a == "2":
                    amt = float(input("თანხა (₾): ").strip())
                    self.withdraw(amt, "lari")
        
                elif a == "3":
                    amt = float(input("თანხა ($): ").strip())
                    self.withdraw(amt, "dollar")
        
                elif a == "4":
                    self.check_balance()
        
                elif a == "5":
                    to  = input("მიმღების მომხმარებელი: ").strip()
                    amt = float(input("თანხა (₾): ").strip())
                    self.transfer(to, amt)
        
                elif a == "6":
                    amt = float(input(f"სესხის თანხა (მაქს. {format_lari(self.MAX_LOAN)}): ").strip())
                    self.loan(amt)
        
                elif a == "7":
                    amt = float(input("გადახდის თანხა: ").strip())
                    self.pay_loan(amt)
        
                elif a == "8":
                    self.history()

                elif a == '9':
                    self.freeze_account()

                elif a == '0':
                    self._loged_in = None

bank = Bank()
bank.run()