from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from PIL import Image

# Load pre-trained model and processor
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# Load image
image_path = "D:/paintio/uploaded_image.png"
image = Image.open(image_path).convert("RGB")

# Perform OCR
pixel_values = processor(images=image, return_tensors="pt").pixel_values
generated_ids = model.generate(pixel_values)
text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]

print("Extracted Text:", text)

def returnText():
    return text
