from flask import flask
app = flask(__name__)
@app.route('/')
def index():
    return 'Welcome to ut-p3'