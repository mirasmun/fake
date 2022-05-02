from datetime import datetime
import random
from flask \
import (
    Flask, render_template,
    url_for, request
)

app = Flask(__name__)

def random_numbers():
    numbers = "4"
    for _ in range(0, 10):
        numbers += str(random.randint(1, 9))
    return numbers

def random_code():
    numbers = ""
    for _ in range(0, 4):
        numbers += str(random.randint(1, 9))
    return numbers


context = dict({
    "phone": "",
    "recieve": "",
    "amount": "",
    "sender": "Самат К.",
    "random_numbers": random_numbers(),
    "random_code": random_code(),
    "current_date": datetime.now().strftime("%d.%m.%Y %H:%M")
})


@app.route("/")
def pay():
    return render_template("pay.html", cash="12492,00")

@app.route("/confirm", methods=["POST", "GET"])
def confirm():
    if request.method == "POST":
        global context
        context["phone"] = request.form["phone"]
        context["recieve"] = request.form["recieve"]
        context["amount"] = request.form["money"]
        return render_template("confirm.html", **context)
    return url_for('pay')

@app.route("/cheque")
def cheque():
    return render_template("cheque.html", **context) 


# app.run(host="192.168.0.148")