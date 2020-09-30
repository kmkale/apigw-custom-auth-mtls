import json
import os

import pytest

from mtls_custom_auth import app


@pytest.fixture()
def apigw_event():
    """ Loads API GW Event"""
    tests_root = os.path.dirname(__file__)
    with open(os.path.join(tests_root,'../../events/event_self_signed.json'), 'rb') as f:
        event = json.load(f)

    return event


def test_lambda_handler(apigw_event, mocker):

    ret = app.lambda_handler(apigw_event, "")
    print("Received ret: " + json.dumps(ret, indent=2))

    assert "isAuthorized" in ret
    assert ret["isAuthorized"] == "true"
    assert ret["context"]["exception"] == None
