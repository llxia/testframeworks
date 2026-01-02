import pytest
import source.shapes as shapes
import math


class TestCircle:
    def setup_method(self, method):
        print(f"Setting up {method}")
        self.circle = shapes.Circle(10)

    def teardown_method(self, method):
        print(f"Teardown up {method}")

    def test_circle_area(self):
        assert self.circle.area() == math.pi * 10 ** 2

    def test_circle_primeter(self):
        assert self.circle.primeter() == math.pi * 10 * 2
