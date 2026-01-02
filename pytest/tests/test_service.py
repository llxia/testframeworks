import requests
import source.service as service
import pytest
import unittest.mock as mock


@mock.patch("requests.get")
def test_get_users(mock_get):
    mock_response = mock.Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {"id": 1, "name": "Joe Doe"}
    mock_get.return_value = mock_response
    data = service.get_users()
    print("data", data)
    assert data == {"id": 1, "name": "Joe Doe"}


@mock.patch("requests.get")
def test_get_http_error(mock_get):
    mock_response = mock.Mock()
    mock_response.status_code = 400
    mock_get.return_value = mock_response
    with pytest.raises(requests.HTTPError):
        service.get_users()
