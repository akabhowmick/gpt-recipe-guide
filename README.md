# GPT Recipes Guide

Welcome to the GPT Recipes Guide project, an innovative autonomous agent designed to create personalized recipe guides tailored to user preferences and current food stock. GPT Recipes Guide revolutionizes the way we cook by leveraging the power of AI to curate, write, design, and edit recipes based on individual tastes and available ingredients.

## 🔍 Overview

GPT Recipes Guide consists of six specialized sub-agents in LangChain's new [LangGraph Library](https://github.com/langchain-ai/langgraph):

1. **Search Agent**: Scours the web for the latest and most relevant recipes.
2. **Curator Agent**: Filters and selects recipes based on user-defined preferences and available ingredients.
3. **Writer Agent**: Crafts engaging and reader-friendly recipe instructions.
4. **Critique Agent**: Provides feedback to the writer until the recipe is approved.
5. **Designer Agent**: Layouts and designs the recipes for an aesthetically pleasing presentation.
6. **Editor Agent**: Constructs the recipe guide based on the curated recipes.
7. **Publisher Agent**: Publishes the recipe guide to the frontend or desired service.

Each agent plays a critical role in delivering a unique and personalized recipe guide experience.

## 🌟 Features

- **Personalized Content**: Get recipes that align with your tastes and preferences.
- **Ingredient-Based Selection**: Tailors recipes based on the ingredients you have on hand.
- **Diverse Sources**: Aggregates recipes from a wide range of reputable culinary sources.
- **Engaging Design**: Enjoy a visually appealing layout and design.
- **Quality Assurance**: Rigorous editing ensures reliable and accurate recipe instructions.
- **User-Friendly Interface**: Easy-to-use platform for setting preferences and receiving your recipe guide.

## 🛠️ How It Works

1. **Setting Preferences**: Users input their culinary interests, preferred cuisines, and current food stock.
2. **Automated Curation**: The Search and Curator Agents find and select recipes.
3. **Content Creation**: The Writer Agent drafts recipes, which are then designed by the Designer Agent.
4. **Recipe Guide Design**: The Editor Agent reviews and finalizes the content.
5. **Delivery**: Users receive their personalized recipe guide to their mailbox.

Enjoy discovering new and exciting recipes with GPT Recipes Guide!

## 🚀 Getting Started

### Prerequisites

- Tavily API Key - [Sign Up](https://tavily.com/)
- OpenAI API Key - [Sign Up](https://platform.openai.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/akabhowmick/gpt-recipe-guide
   ```
2. Export your API Keys
   ```sh
    export TAVILY_API_KEY=<YOUR_TAVILY_API_KEY>
    export OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
   ```
3. Install Requirements
   ```sh
   pip install -r requirements.txt
   ```
4. Run the app
   ```sh
    python app.py
   ```
   or ```sh
   python3 app.py
   ```

   ```
5. Open the app in your browser
   ```sh
    http://localhost:5000/
   ```
6. Enjoy!
