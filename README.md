
# LawBot

LawBot is an AI-powered legal assistant designed to process, analyze, and respond to legal queries dynamically. It leverages Azure AI services for natural language understanding, document intelligence, and contextual response generation.

## Project Overview

LawBot integrates multiple Azure AI tools and custom models to provide accurate and context-aware responses to user queries. It features a dynamic backend, frontend web application, and efficient pre-processing for enhanced performance.

### Project Architecture

Below is the high-level architecture of LawBot:

![Project Architecture](./figures/project_structure.png)

### Response Optimization

LawBot employs a comprehensive response optimization workflow that dynamically handles user queries and generates the most relevant answers. The workflow ensures accuracy by validating citations and content before providing the final output.

![Response Optimization Workflow](./figures/response_optimization.png)

## Features

- **Backend Services**:
  - Built with FastAPI and NGINX for scalable API services.
  - Dockerized environment for easy deployment.
  - Integration with Azure AI services for document intelligence and natural language processing.

- **Frontend**:
  - Dynamic and responsive UI built with HTML, CSS, and JavaScript.
  - Interactive input forms for legal queries.
  - API-driven communication with the backend.

- **Azure AI Integration**:
  - **Azure Blob Storage**: Stores RAG datasets and Q&A datasets.
  - **Azure AI Search**: Provides semantic search and vectorization.
  - **Azure Document Intelligence**: Extracts and analyzes information from uploaded legal documents.
  - **Azure OpenAI**: Fine-tuned GPT-4 model for generating context-aware answers.

- **Response Optimization**:
  - Validates input language and translates as needed.
  - Ensures citations and content validity before summarizing and outputting answers.

## Directory Structure

```
LawBot/
├── backend/                     # Backend API and services
│   ├── docker-compose.yml       # Docker Compose file for backend
│   ├── Dockerfile               # Docker image definition
│   └── src/
│       ├── __init__.py          # Backend initialization
│       └── get_response.py      # Core API logic for generating responses
├── data/                        # Dataset for training and validation
│   ├── qna_test.csv
│   ├── qna_train.csv
│   └── qna_val.csv
├── figures/                     # Figures for documentation and visualization
│   ├── project_structure.jpeg
│   └── response_optimization.jpeg
├── frontend/                    # Frontend codebase
│   ├── index.html               # Main HTML file
│   ├── package.json             # Frontend dependencies
│   ├── script.js                # Main JavaScript logic
│   └── src/
│       ├── style.css            # Main CSS file
│       ├── word_script.js       # Word-specific JavaScript logic
│       ├── word_style.css       # Word-specific styling
│       └── word.html            # Word-specific HTML file
├── preprocess/                  # Preprocessing scripts and notebooks
│   ├── __init__.py
│   └── documentinteli.ipynb     # Notebook for document intelligence processing
├── LICENSE                      # License file
├── README.md                    # Documentation file
└── requirements.txt             # Python dependencies
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/seonokkim/LawBot.git
   cd LawBot
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Build and run the backend using Docker Compose:
   ```bash
   cd backend
   docker-compose up --build
   ```

4. Serve the frontend:
   Open `frontend/index.html` in your browser.

## Usage

1. Upload legal documents or ask a query through the frontend.
2. The backend processes the input and interacts with Azure services to generate responses.
3. Final answers are displayed on the frontend with valid citations and summarized insights.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

Special thanks to Azure AI tools and OpenAI for providing advanced APIs that power this project.
