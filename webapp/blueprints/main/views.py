from flask import url_for, jsonify ,request, render_template
import json

from . import main

import interpreter


################################################################ HOME
@main.route('/')
@main.route('/index')
def index():
    return render_template('index.html')


################################################################# RUN
@main.route('/run',methods=['GET', 'POST'])
def run():
	if request.method=='POST':
		data = request.form['js_data']
		code = json.loads(data)['code']
		result = interpreter.run(code)
		return jsonify({'result' : result})
