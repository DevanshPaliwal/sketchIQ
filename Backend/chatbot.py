import subprocess
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_session import Session
from db import *
import os
def chat_with_llama(message):
    print(message)
    try:
        # Run the Ollama command and capture the output
        result = subprocess.run(
            ["ollama", "run", "llama3.1", message, "respond","under","30","words"],
            capture_output=True, text=True
        )

        # Check if there was any error during the execution
        if result.returncode != 0:
            return f"Error: {result.stderr.strip()}"

        return result.stdout.strip()  # Return the cleaned response text
    except Exception as e:
        return f"Exception occurred: {str(e)}"
    

