{
    "builds": [{
        "src": "lmsapi2/wsgi.py",
        "use": "@vercel/python",
        "config": { "maxLambdaSize": "15mb", "runtime": "python3.9" }
    }],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "lmsapi2/wsgi.py"
       }
    ]
}