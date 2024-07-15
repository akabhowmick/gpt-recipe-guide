import os
# Todo: Think about whether or not cookbook or recipe here

class PublisherAgent:
    def __init__(self, output_dir):
        self.output_dir = output_dir

    def save_recipe_html(self, recipe_html):
        path = os.path.join(self.output_dir, "recipe.html")
        with open(path, "w") as file:
            file.write(recipe_html)
        return path

    def run(self, recipe_html: str):
        recipe_path = self.save_recipe_html(recipe_html)
        return recipe_path
