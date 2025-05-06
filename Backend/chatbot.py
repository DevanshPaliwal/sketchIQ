import subprocess
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_session import Session
from db import *
import os
# def chat_with_llama(message):
#     print(message)
#     try:
#         # Run the Ollama command and capture the output
#         result = subprocess.run(
#             ["ollama", "run", "llama3.1", message, "respond","under","30","words"],
#             capture_output=True, text=True
#         )

#         # Check if there was any error during the execution
#         if result.returncode != 0:
#             return f"Error: {result.stderr.strip()}"

#         return result.stdout.strip()  # Return the cleaned response text
#     except Exception as e:
#         return f"Exception occurred: {str(e)}"
    
import google.generativeai as genai
from dotenv import load_dotenv
import os
load_dotenv()


genai.configure(api_key=os.getenv("api_key"))

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash",
  generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[]
)




def chat_with_ai(message):
    response = chat_session.send_message(message)
    print(response.text)
    return response.text


# print(response.text)