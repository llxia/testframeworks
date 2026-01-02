import math


class Shape:
    def area(self):
        pass

    def perimeter(self):
        pass


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def primeter(self):
        return math.pi * self.radius * 2


class Rectangle:
    def __init__(self, h, w):
        self.h = h
        self.w = w

    def __eq__(self, other):
        if not isinstance(other, Rectangle):
            return False
        return self.h == other.h and self.w == other.w

    def area(self):
        return self.h * self.w

    def primeter(self):
        return 2 * (self.h + self.w)
