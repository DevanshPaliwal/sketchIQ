# import cv2
# from PIL import Image
# import pytesseract

# # Load image
# image_path = "D:/paintio/uploaded_image.png"
# image = cv2.imread(image_path)

# # Preprocessing
# gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
# _, thresholded = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY_INV)
# dilated = cv2.dilate(thresholded, None, iterations=1)

# # Save preprocessed image (for debugging purposes)
# cv2.imwrite("D:/paintio/preprocessed_image.png", dilated)

# # Perform OCR
# config = "--psm 10"  # OCR single character
# text = pytesseract.image_to_string(dilated, config=config)
# print("Extracted Text:", text)

import easyocr

# Initialize EasyOCR reader
reader = easyocr.Reader(['en'])  # Specify language, e.g., 'en' for English

# Path to your image
image_path = "D:/paintio/uploaded_image.png"

# Perform OCR
result = reader.readtext(image_path)

# Print the result
for (bbox, text, confidence) in result:
    print(f"Detected Text: {text} (Confidence: {confidence:.2f})")
