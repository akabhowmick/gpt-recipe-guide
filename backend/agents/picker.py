from datetime import datetime
from langchain.adapters.openai import convert_openai_messages
from langchain_openai import ChatOpenAI


model = "gpt-4-0125-preview"

class PickerAgent:
    def __init__(self):
        pass

    def curate_sources(self, query: str, sources: list):
        """
        Curate relevant sources for a query
        :param input:
        :return:
        """
        prompt = [
            {
                "role": "system",
                "content": "You are a personal cookbook picker. Your sole purpose is to choose 5 most relevant recipes"
                "for me to read from a list of recipes.\n ",
            },
            {
                "role": "user",
                "content": f"Today's date is {datetime.now().strftime('%d/%m/%Y')}\n."
                f"Topic or Query: {query}\n"
                f"Your task is to return the 5 most relevant recipes for me to read for the provided list of ingredients or "
                f"query\n "
                f"Here is a list of recipes:\n"
                f"{sources}\n"
                f"Please return nothing but a list of the strings of the URLs in this structure: ['url1',"
                f"'url2','url3','url4','url5'].\n ",
            },
        ]

        lc_messages = convert_openai_messages(prompt)
        response = ChatOpenAI(model, max_retries=1).invoke(lc_messages).content
        chosen_sources = response
        for i in sources:
            if i["url"] not in chosen_sources:
                sources.remove(i)
        return sources

    def run(self, recipe: dict):
        recipe["sources"] = self.curate_sources(recipe["query"], recipe["sources"])
        return recipe
