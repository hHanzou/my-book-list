using static System.Reflection.Metadata.BlobBuilder;

namespace webapi.Models
{
    public class BookCategory
    {
        public int Id { get; set; }
        public int? BookId { get; set; }
        public int? CategoryId { get; set; }
        public Book? Books { get; set; }
        public Category? Categories { get; set; }
    }
}
