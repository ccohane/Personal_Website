#!usr/bin/env python3

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

#----------------------------------------------------------------------------------------
@app.route('/', methods=['GET'])
def start():
    if request.method == 'GET':
        return render_template('Profile_Page.html')

@app.route('/Brick_Breaker', methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template('CalBrickBreaker.html')

if __name__=="__main__":
    app.run(host='0.0.0.0', port=1999, debug=True)
