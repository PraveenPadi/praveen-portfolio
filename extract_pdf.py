import PyPDF2

try:
    with open(r"E:\MY resume\love_letter.pdf", "rb") as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(text.strip())
except Exception as e:
    print(f"Error: {e}")
