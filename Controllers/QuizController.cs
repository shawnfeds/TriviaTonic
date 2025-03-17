using Microsoft.AspNetCore.Mvc;

namespace TriviaTonic.Controllers
{
    public class QuizController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
