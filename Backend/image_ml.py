from db import *
import base64
from io import BytesIO
from PIL import Image
from transformers import TrOCRProcessor, VisionEncoderDecoderModel

# Load pre-trained model and processor
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

def get_image_from_db(username):
    try:
        data = image_collection.find_one({"username": username})
        if data and "image" in data:
            return data["image"]
        return None
    except Exception as e:
        print(f"Error fetching image: {e}")
        return None

def extract_text_from_image(image_data):
    image_bytes = base64.b64decode(image_data)
    image = Image.open(BytesIO(image_bytes)).convert("RGB")
    pixel_values = processor(images=image, return_tensors="pt").pixel_values
    generated_ids = model.generate(pixel_values)
    text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
    return text

# username = "your_username"
# image_data = get_image_from_db(username)

# extracted_text = extract_text_from_image(image_data)
# print("Extracted Text:", extracted_text)

