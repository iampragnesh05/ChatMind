# OpenAI GPT Text Completion Webapp

This webapp allows users to generate natural language text completions based on a prompt using the OpenAI GPT language models.

## How to use

To use the webapp, simply enter a prompt in the input field and adjust the parameters as desired. The webapp will send a request to the OpenAI API and display the generated text completion in a bordered box along with some usage statistics such as the number of completion tokens and prompt tokens used.

## Parameters

The following parameters can be adjusted to fine-tune the text completion:

- `model`: The OpenAI GPT language model to use. Default is `text-davinci-002`.
- `prompt`: The prompt to use for the text completion.
- `max_tokens`: The maximum number of tokens to generate for the text completion. Default is `50`.
- `temperature`: The "creativity" of the text completion. Higher values result in more creative responses. Default is `1`.
- `top_p`: The diversity of the text completion. Lower values result in more common responses. Default is `1`.
- `n`: The number of text completions to generate. Default is `1`.

## Usage statistics

The following usage statistics are displayed for each text completion:

- `Completion tokens`: The number of tokens generated for the text completion.
- `Prompt tokens`: The number of tokens used in the prompt.
- `Total tokens`: The sum of the completion and prompt tokens.

## Deployment

The webapp is deployed on GitHub Pages and can be accessed at `https://iampragnesh05.github.io/ChatMind/`.


