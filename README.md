# TriviaTonic

Your ultimate destination for mind-blowing trivia and quizzes. Test your knowledge and compete with friends in various categories. TriviaTonic is a dynamic and interactive platform built on ASP.NET MVC, combining a sleek interface with the power of external quiz APIs to deliver a seamless trivia experience.

## Features

- **Trivia and Quizzes**: Explore a wide variety of quiz categories and put your knowledge to the test.
- **API Integration**: Uses [QuizAPI](https://quizapi.io/) for fetching quiz questions and answers dynamically.
- **Interactive Design**: Built with ASP.NET MVC and Bootstrap for a modern, responsive interface.

## Prerequisites

Before you start using or setting up TriviaTonic, ensure you have the following installed:

- **.NET Framework (latest version)**: Required to run the MVC project.
- **Visual Studio**: For development and running the project.
- **SQL Server**: For database storage (if applicable).
- **API Token**: Get your API token by registering on [QuizAPI](https://quizapi.io/).

## Setting Up the Project

Follow these steps to set up and run the TriviaTonic project locally:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   ```
Replace <repository-url> with the URL of this repository.

Open the Project:

Launch Visual Studio.

Open the ```TriviaTonic.sln``` solution file.

Configure API Token:

Register on [QuizAPI](https://quizapi.io/) and obtain an API token.

Add the API token to your project. You can do this by:

Adding it to the ```appsettings.json``` file (if available), or

Updating the API key directly in the code:

```
csharp
string apiUrl = "https://quizapi.io/api/v1/questions?apiKey=YOUR_API_TOKEN";
```
Replace **YOUR_API_TOKEN** with your actual token.

Restore NuGet Packages:

In Visual Studio, go to ```Tools``` > ```NuGet Package Manager``` > ```Manage NuGet Packages for Solution```.

Restore any missing packages required by the project.

Run the Application:

Set the project as the startup project in Visual Studio.

Press ```F5``` or click the "Run" button to start the application.

Access the Application:

Open your browser and navigate to ```http://localhost:<port>``` (replace ```<port>``` with the port number specified by Visual Studio).

## Usage
- **Start a Quiz**: Select a category and begin answering questions.

- **View Scores**: Keep track of your progress and improve over time.

- **Categories**: Explore quizzes across various topics, dynamically fetched from QuizAPI.

## Contributing
We welcome contributions to TriviaTonic! If you'd like to contribute:

1.Fork the repository.

2.Create a new branch (```git checkout -b feature-branch```).

3.Commit your changes (```git commit -m 'Add some feature'```).

4.Push to the branch (```git push origin feature-branch```).

5.Open a pull request.

## License
This project is licensed under the [MIT License](https://github.com/shawnfeds/TriviaTonic/blob/main/LICENSE).
