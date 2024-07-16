from flask import Flask, jsonify, request
from backend.langgraph_agent import MasterAgent

backend_app = Flask(__name__)


@backend_app.route("/", methods=["GET"])
def index():
    return jsonify({"status": "Running"}), 200


@backend_app.route("/generate_cookbook", methods=["POST"])
def generate_recipes():
    data = request.json
    master_agent = MasterAgent()
    recipes = master_agent.run(
        data["ingredientList"],
        data["cuisines"],
        data["desiredCookingTime"],
        data["layout"],
    )
    return jsonify({"path": recipes}), 200
