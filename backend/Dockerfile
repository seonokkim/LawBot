# Use a Python base image (e.g., Python 3.12 slim image)
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy requirements.txt for installing necessary libraries
# (Assuming requirements.txt exists in the project root)
COPY requirements.txt .

# Install the libraries listed in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application source code
COPY src/ ./src

# Run the FastAPI server using Uvicorn
# Set the UVICORN port through an environment variable (default: 8000)
ENV PORT=8000

# Expose port 8000 for external access
EXPOSE 8000

# Command to start the application
CMD ["uvicorn", "src.get_response:app", "--host", "0.0.0.0", "--port", "8000"]