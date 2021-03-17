#@title Texto de título padrão
from httplib2 import Http
from oauth2client.service_account import ServiceAccountCredentials
from apiclient.discovery import build

def sendMessage():
    def create_keyfile_dict():
        variables_keys = {
            "type": "service_account",
            "project_id": "vital-effort-302916",
            "private_key_id": "8d56b1408cfc35e6d3ce41cab5fd2693e3231e52",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCq/WqPYgSoEig8\n2eiuz4zRJ/wOBAzF7c1gc8t4pbB5dhVTFLYQxNI/mFEJvyT47hgoiFI0UrAblpA7\n5Yu/CFyMkPMye8GAlYXeJv4g76bYjxUQBE0IcFN3zSLDC3YK+Nm+DmxJwH+qgPhb\ntSqJZezGhr90WmLhUxr24Ot4sUgeY33a54dKw8w+zbaxK2JsU6fYIOJItXjo5CIn\nqSNrdWa3xyznfyuoqXZHtWDF9Tmv7FCpZTL/mcTriwl2DtcSuSZ7s5edJfBTpCIe\nKklstlWSkbpnkz0unRVCIji28e39n1V71liJXPYakYvh2fP7NGF26Lzr/rDLioqP\noBwsOcapAgMBAAECgf8QfEcEAExbXE2E1je7ui+2hkdG5B0RVUTJQgOtezTCr6t1\n7mZZfVqZafMgZip71ZAKWGAgNu/yRJ2MEYnnpvJcmxFjHhcJ5ew8W/pqMoJMR39A\nXYbhPcSf0+0dVU8AkUNVviWEDhbMk7np18fZYB05wPKdOY4JK2K/mTWmSloSZUWU\nQM0QBvOvENWik7t9fhCF090rqjH92jtv89Xdv7gVFyiZ0h7vAlAS0EZF4myu2qkg\nqZAH3eXxHbiWl9lTy4hBOqtXVxXOMuvmvlpY++fvdZLFpnzEp8A/7wJHIxfq+PGF\n1lJgkcju0634RatvsWfQY6iLpGJFz+qgQilEb3sCgYEA2yPWxs9yrhcI+3zcKJFb\nPb+eMZpwun6HaN5MQqq0n0mvYaenidGQiphCXqOi9KtyhLaF4/MLnxDpxZ1HkI/C\ncD2KTaGPwu4JCFRgDiQRTAqWIZj3ORB0HqOVkhtEedFbM4MJTkGmoNLU2mjvOnlz\nSZGVnfd6VeMTih+eH5LDjbsCgYEAx8A8bQ8//ryQrkckSLcqStJwiRj9h/1urNoR\n6qXyz8fCUYPyF2wk+tveqYuxVyz1hlzmSykab3/2UrMabneR3NtF5Fybp+ECWkfX\nn7N4co8Jpm/iZo3UX8vHupKewlYDkUjdvRhHvtyAH4tVPbWf2KXrr+WdIc1xvTBu\nvhmjROsCgYAi74O+DjRqLKHx9eXjUckJ/xJpNgXitWlA/q+JsU06V7TuDJxZDF/O\nuJdcHxpLh0mqfq65uHWR1lBugLR4B3MoEaeK2MbifLBT85+coYNgbA+jK4++OTFJ\n8SpXMKGqCgZQIAPLxguaeAIXD8OTvujyQZNoq5uFNb5XttKulec3IQKBgCUYm2A5\no83gIRJsnd1vPsh0enfLj1IRC9vIB+nG9egGlhzjXzNgXyHDcX+VNNMWw2Y3nIE6\n2fD5F7rWDkOTqyAUDM/TLwknbXNswiujfevwin9Bag9Xqag8xRPuJNO8e58gpCV4\n++IDOzwgeS0jrNLkRXf+MYdUixnyg66EPmEPAoGBAMicziAp7q7/Xw0nK/meQG9u\nq7qyJqecqhKLCB0p6d7NHjDnz6pdw0RIm0N4PufstFGF4J0ybAUJ3E3Ok8/Pkebl\nEN6euXYmfMFxRsOSrNnLfkJga296RO6jJqhQJTM8CZgKTl1oa4oh1+2YCht2iWxe\nmGEHxqwbbo6u5QbNqEUz\n-----END PRIVATE KEY-----\n",
            "client_email": "starting-account-4l1c1acu1htv@vital-effort-302916.iam.gserviceaccount.com",
            "client_id": "105121874645502724887",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/starting-account-4l1c1acu1htv%40vital-effort-302916.iam.gserviceaccount.com"
        }
        return variables_keys

    scopes = 'https://www.googleapis.com/auth/chat.bot'
    credentials = ServiceAccountCredentials.from_json_keyfile_dict(
        create_keyfile_dict(), scopes)
    chat = build('chat', 'v1', http=credentials.authorize(Http()))
    resp = chat.spaces().messages().create(
        parent='spaces/AAAAZw0HEoY', # use your space here
        body={"text":"Development test, please ignore this message. Spacecode: AAAAg8fgrVs"}).execute()
    print(resp)

sendMessage()
