import pytest
import source.my_functions as my_functions


def test_add():
    result = my_functions.add(1, 3)
    assert result == 4


def test_add_strs():
    result = my_functions.add("hello", "world")
    assert result == "helloworld"


def test_divide():
    result = my_functions.divide(6, 3)
    assert result == 2
    with pytest.raises(ZeroDivisionError):
        my_functions.divide(6, 0)
