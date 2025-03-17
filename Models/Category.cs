using Newtonsoft.Json;

namespace TriviaTonic.Models
{
    public class Category
    {
        [JsonProperty("id")]
        public int CategoryId { get; set; }
        [JsonProperty("name")]
        public string CategoryName { get; set; }
    }
}
