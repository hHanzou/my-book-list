namespace webapi.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string? BookName { get; set; }
        public ICollection<BookCategory>? BookCategories { get; set; }
    }
}