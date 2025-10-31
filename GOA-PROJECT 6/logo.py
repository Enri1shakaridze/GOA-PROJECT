# ენრი შაქარიძე

# GOA-ს ლოგო


from turtle import *

bgcolor("black")
speed(0)

def square(x, y, size, col):
    penup()
    goto(x, y)
    pendown()
    color(col)
    begin_fill()
    for i in range(4):
        forward(size)
        right(90)
    end_fill()

s = 20

color("white")
square(-300, 100, s, "white")
square(-275, 100, s, "white")
square(-250, 100, s, "white")
square(-225, 100, s, "white")
square(-200, 100, s, "white")

square(-300, 75, s, "white")
square(-300, 50, s, "white")
square(-300, 25, s, "white")
square(-300, 0, s, "white")

square(-275, 0, s, "white")
square(-250, 0, s, "white")
square(-225, 0, s, "white")
square(-200, 0, s, "white")

square(-250, 50, s, "white")
square(-225, 50, s, "white")
square(-200, 50, s, "white")

square(-200, 25, s, "white")



color("lime")
square(-100, 100, s, "lime")
square(-75, 100, s, "lime")
square(-50, 100, s, "lime")
square(-25, 100, s, "lime")
square(0, 100, s, "lime")
square(-100, 75, s, "lime")
square(-100, 50, s, "lime")
square(-100, 25, s, "lime")
square(0, 75, s, "lime")
square(0, 50, s, "lime")
square(0, 25, s, "lime")
square(-100, 0, s, "lime")
square(-75, 0, s, "lime")
square(-50, 0, s, "lime")
square(-25, 0, s, "lime")
square(0, 0, s, "lime")


color("white")
square(100, 0, s, "white")
square(110, 25, s, "white")
square(120, 50, s, "white")
square(130, 75, s, "white")
square(140, 100, s, "white")
square(165, 100, s, "white")
square(175, 75, s, "white")
square(185, 50, s, "white")
square(195, 25, s, "white")
square(205, 0, s, "white")
square(167.5, 25, s, "white")
square(137.5, 25, s, "white")



hideturtle()
done()