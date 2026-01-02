import pytest
import source.shapes as shapes
import math


@pytest.fixture
def my_rectangle():
    return shapes.Rectangle(10, 20)


@pytest.fixture
def other_rectangle():
    return shapes.Rectangle(5, 15)


def test_rectangle_area(my_rectangle):
    assert my_rectangle.area() == 10 * 20


def test_rectangle_primeter(my_rectangle):
    assert my_rectangle.primeter() == 2 * (20 + 10)


def test_rectangle_eq(my_rectangle, other_rectangle):
    assert my_rectangle != other_rectangle
