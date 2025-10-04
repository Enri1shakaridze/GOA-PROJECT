from turtle import *

bgcolor("blue")   # ფონად ლურჯი
speed(0.5)
width(6)
penup()
goto(-200,-100)
pendown()

# მომრგვალებული კვადრატი (ჩარჩო)
for i in range(2):
    forward(400)
    circle(30,90)
    forward(200)
    circle(30,90)
    color('red')


# B
penup()
goto(-170,-50)
pendown()
left(90)
forward(120)
right(90)
circle(-30,180)
right(180)
circle(-30,180)

# A
penup()
left(180)
forward(70)
left(75)
pendown()
forward(120)
right(150)
forward(120)
penup()
right(-178)
forward(40)
pendown()
right(-78.5)
forward(40)

# N
penup()
goto(70, 70)
pendown()
left(89)
forward(120)
right(150)
forward(135)
left(150)
forward(120)

# K
penup()
left(89)
forward(100)
pendown()
right(-90.5)
pendown()
forward(120)
penup()
left(180)
forward(65)
left(146)
pendown()
forward(75)
penup()
right(180)
forward(76)
pendown()
left(75)
forward(78)

done()
end_fill