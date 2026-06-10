def sesxi(name):
    print(f"მოგესალმებით ბატონო {name}")
    # მომხმარებლის მონაცემების შემოტანა
    tanxa = int(input("შეიყვანე რა თანხის სესხის გამოტანაც გსურთ: "))
    months = int(input("რამდენ თვეზე გინდა გადანაწილება?: "))
    annual_percent = int(input("რამდენი % წლიური?: "))
    percent = annual_percent / 100

    # თვიური პროცენტი
    monthly_rate = (tanxa + (tanxa * percent)) / months

    # ჯამური გამოთვლები
    total_payment = tanxa + (tanxa * percent)

    # შედეგების ჩვენება
    print("--- სესხის შედეგი ---")
    print(f"ყოველთვიური გადახდა: {monthly_rate} ₾")
    print(f"სულ გადასახდელი: {total_payment} ₾")

# პროგრამის გაშვება
sesxi("ნიკა")