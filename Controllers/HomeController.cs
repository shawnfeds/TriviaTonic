using System.Diagnostics;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;
using TriviaTonic.Models;

namespace TriviaTonic.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Categories()
        {
            // add your api key from https://quizapi.io/
            var apiKey = "";
            var client = new RestClient("https://quizapi.io/api/v1/categories?apiKey="+apiKey);
            var request = new RestRequest();
            RestResponse response = client.Execute(request);

            List<Category> categories = new List<Category>();
            // Check if the response is successful
            if (response.IsSuccessful)
            {
                // Deserialize JSON response to a list of Group objects
               categories = JsonConvert.DeserializeObject<List<Category>>(response.Content);
            }

            return View(categories);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
